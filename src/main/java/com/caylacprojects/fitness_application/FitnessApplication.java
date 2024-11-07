package com.caylacprojects.fitness_application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.github.cdimascio.dotenv.Dotenv;

@SpringBootApplication
public class FitnessApplication {

    public static void main(String[] args) {

        Dotenv dotenv = Dotenv.configure().load();

        // Set system properties before running the application
        System.setProperty("spring.datasource.url", dotenv.get("DATABASE_URL"));
        System.setProperty("spring.datasource.username", dotenv.get("DATABASE_USERNAME"));
        System.setProperty("spring.datasource.password", dotenv.get("DATABASE_PASSWORD"));

        // Test print
        System.out.println("Starting App");
        System.out.println("Database URL: " + dotenv.get("DATABASE_URL"));
        System.out.println("Database Username: " + dotenv.get("DATABASE_USERNAME"));
        System.out.println("Database Password: " + dotenv.get("DATABASE_PASSWORD"));

        // Run the application
        SpringApplication.run(FitnessApplication.class, args);
    }
}
