package com.task.config;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.List;

import javax.crypto.SecretKey;

import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


public class JwtTokenValidator extends OncePerRequestFilter {
	 
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		String jwt = request.getHeader(JwtConstant.JWT_HEADER);
		
		System.out.println("jwt------------------"+jwt);
		if(jwt !=null  && jwt.startsWith("Bearer "))
		{
			jwt = jwt.substring(7);			
			try {
				SecretKey key =Keys.hmacShaKeyFor(JwtConstant.SECRET_KEY.getBytes(StandardCharsets.UTF_8));
				
				Claims claim = Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(jwt).getBody();
				 
				System.out.println("Claims: " + claim);
				
				String email = String.valueOf(claim.get("email"));
				String authorities = String.valueOf(claim.get("authorities"));
				
				List<GrantedAuthority> auths = AuthorityUtils.commaSeparatedStringToAuthorityList(authorities);
				Authentication authentication = new UsernamePasswordAuthenticationToken(email,null,auths);
				  	
				SecurityContextHolder.getContext().setAuthentication(authentication);
			}
			catch(Exception e)
			{
			
				throw new  BadCredentialsException("Invalid token....");
			}
		}
		filterChain.doFilter(request, response);
		
	}
	
}

