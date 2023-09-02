package tech.CaisseManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import tech.CaisseManager.Login.model.ERole;
import tech.CaisseManager.Login.model.Role;
import tech.CaisseManager.Login.model.User;
import tech.CaisseManager.Login.repository.RoleRepository;
import tech.CaisseManager.Login.repository.UserRepository;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class CaisseManagerApplication {

		public static void main(String[] args) {
			SpringApplication.run(CaisseManagerApplication.class, args);
		}

			/*@Bean
			public CorsFilter corsFilter() {
				CorsConfiguration corsConfiguration = new CorsConfiguration();
				corsConfiguration.setAllowCredentials(true);
				corsConfiguration.setAllowedOrigins(Arrays.asList("http://localhost:4200"));
				corsConfiguration.setAllowedHeaders(Arrays.asList("Origin", "Access-Control-Allow-Origin", "Content-Type",
						"Accept", "Authorization", "Origin, Accept", "X-Requested-With",
						"Access-Control-Request-Method", "Access-Control-Request-Headers"));
				corsConfiguration.setExposedHeaders(Arrays.asList("Origin", "Content-Type", "Accept", "Authorization",
						"Access-Control-Allow-Origin", "Access-Control-Allow-Origin", "Access-Control-Allow-Credentials"));
				corsConfiguration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
				UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
				source.registerCorsConfiguration("/**", corsConfiguration);
				return new CorsFilter(source);
			}
*/
	@Component
	public class DataBootstrap implements CommandLineRunner {

		private final UserRepository userRepository;
		private final RoleRepository roleRepository;
		@Autowired
		PasswordEncoder encoder;
		@Autowired
		public DataBootstrap(UserRepository userRepository,RoleRepository roleRepository) {
			this.userRepository = userRepository;
			this.roleRepository = roleRepository;
		}

		@Override
		public void run(String... args) throws Exception {
			if(roleRepository.findAll().isEmpty() && userRepository.findAll().isEmpty()){
			Role roleAdmin = new Role();
			roleAdmin.setName(ERole.ROLE_ADMIN);
			Role roleCaissier = new Role();
			roleCaissier.setName(ERole.ROLE_CAISSIER);
			roleRepository.save(roleCaissier);
			roleRepository.save(roleAdmin);

			User user = new User();
			Set<Role> roles = new HashSet<>();
			Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
			roles.add(adminRole);
			user.setRoles(roles);
			user.setUsername("superadmin");
			user.setEmail("admin@admin.com"); //A changer
			user.setPassword(encoder.encode("123456"));


				userRepository.save(user);
		}}
	}

}
