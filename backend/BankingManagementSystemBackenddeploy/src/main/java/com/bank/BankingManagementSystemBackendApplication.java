package com.bank;

import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class BankingManagementSystemBackendApplication extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(BankingManagementSystemBackendApplication.class, args);
		System.out.println("running successfully");
	}

	// Required so the app also boots correctly when Tomcat itself
	// launches the WAR (i.e. when there is no main() call at all).
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(BankingManagementSystemBackendApplication.class);
	}

}
