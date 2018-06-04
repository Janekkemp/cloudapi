using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Model;

[Route("api/v1/characters")]
public class CharacterController: Controller
{
 private readonly LibraryContext context;

 public CharacterController(LibraryContext context)
 {
     this.context = context;
 }

 [HttpGet]
 public List<HPCharacter> GetAllcharacters(string name, string firstname, string sort, string dir = "asc")
 {
     IQueryable<HPCharacter> filter = context.HPchar;

     if (!string.IsNullOrWhiteSpace(name))
         filter = filter.Where(d => d.Name == name);
    if (!string.IsNullOrWhiteSpace(firstname))
        filter = filter.Where(d => d.FirstName == firstname);
     
     if (!string.IsNullOrWhiteSpace(sort))
     {
         switch (sort)
         {
             case "name":
              if (dir == "asc")
              {
                  filter = filter.OrderBy(d => d.Name);
              }
              else if (dir == "desc")
                 filter = filter.OrderByDescending(d => d.Name);
            break;
               
         }
     }
     
     
     
     
     return filter.ToList();
 }

 [HttpPost]
 public IActionResult AddCharacter([FromBody] HPCharacter newchar)
 {
     //Boek toevoegen
     context.HPchar.Add(newchar);
     context.SaveChanges();
     return Created("", newchar);
 }

 [Route("{id}")]
 [HttpGet]

 public IActionResult Getchar(int id)
 {
     var character = context.HPchar.Find(id);
     if (character == null)
            return NotFound();
    return Ok(character);
 }
 
 [Route("{id}")]
 [HttpDelete]

 public IActionResult Deletechar(int id)
 {
     var character = context.HPchar.Find(id);
     if (character == null)
        return NotFound();
    context.HPchar.Remove(character);
    context.SaveChanges();
    return NoContent();
 }

 [HttpPut]
 public IActionResult UpdataChar([FromBody] HPCharacter updatechar)
 {
     var orgchar = context.HPchar.Find(updatechar.Id);
     if (orgchar == null)
            return NotFound();
    orgchar.Name = updatechar.Name;
    orgchar.FirstName = updatechar.FirstName;
    orgchar.House = updatechar.House;

    context.SaveChanges();
    return Ok(orgchar);
 }

}
