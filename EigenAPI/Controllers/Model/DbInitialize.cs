using System.Linq;

namespace Model
{
    public class DBInitializer
    {
        public static void Initialize(LibraryContext context)
        {
            context.Database.EnsureCreated();

            if (!context.HPchar.Any() )
            {
                var Ch1 = new HPCharacter()
                {
                    Name = "Potter",
                    FirstName = "Harry",
                    House = "Gryffindor"

                };

                var sp1 = new HPSpell()
                {
                    Name = "Wingardium Leviosa",
                    Effect = "Make things fly"

                };

                context.HPchar.Add(Ch1);
                context.HPspell.Add(sp1);
                context.SaveChanges();
            }
            
            }
    }
}