using Microsoft.EntityFrameworkCore;
namespace Model{
    public class LibraryContext : DbContext
    {
        public LibraryContext (DbContextOptions<LibraryContext> options): base(options)
        {

        }

        public DbSet<HPCharacter> HPchar {get;set;}
        public DbSet<HPSpell> HPspell{get;set;}
    }
}