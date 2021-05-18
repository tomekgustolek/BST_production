using BST_Projekt.Models;
using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;

namespace BST_Projekt.Data
{
    public static class Seed
    {
        public static void SeedUsers(UserManager<User> userManager, RoleManager<Role> roleManager)
        {
            if (!userManager.Users.Any())
            {
                var userData = System.IO.File.ReadAllText("Data/UserSeedData.json");
                var users = JsonConvert.DeserializeObject<List<User>>(userData);

                var roles = new List<Role>
                {
                    new Role{Name = "Coach"},
                    new Role{Name = "Client"},
                    new Role{Name = "Admin"},
                    new Role{Name = "Moderator"},
                    new Role{Name = "VIP"}
                };

                foreach (var role in roles)
                {
                    roleManager.CreateAsync(role).GetAwaiter().GetResult();
                }

                foreach (var user in users)
                {
                    var test = userManager.CreateAsync(user, "password").GetAwaiter().GetResult();
                    if (test.Succeeded)
                    {
                        userManager.AddToRoleAsync(user, "Coach").GetAwaiter().GetResult();
                    }
                }

                var adminUser = new User
                {
                    UserName = "Admin"
                };

                var result = userManager.CreateAsync(adminUser, "password").GetAwaiter().GetResult();

                if (result.Succeeded)
                {
                    var admin = userManager.FindByNameAsync("Admin").GetAwaiter().GetResult();
                    userManager.AddToRolesAsync(admin, new[] { "Admin", "Moderator" }).GetAwaiter().GetResult();
                }
            }

        }

        private static void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }

        }

    }
}
