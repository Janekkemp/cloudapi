using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Model;

[Route("api/v1/spells")]
public class SpellController: Controller
{
 private readonly LibraryContext context;

 public SpellController(LibraryContext context)
 {
     this.context = context;
 }

 [HttpGet]
 public List<HPSpell> GetAllSpells(string name, int? page, int length = 2)
 {
     IQueryable<HPSpell> spell = context.HPspell;
      if (!string.IsNullOrWhiteSpace(name))
         spell = spell.Where(d => d.Name == name);

     if (page.HasValue)
        spell = spell.Skip(page.Value * length);
    spell = spell.Take(length);
     return spell.ToList();
 }

 [HttpPost]
 public IActionResult AddSpell([FromBody] HPSpell newSpell)
 {
     //Boek toevoegen
     context.HPspell.Add(newSpell);
     context.SaveChanges();
     return Created("", newSpell);
 }

 [Route("{id}")]
 [HttpGet]

 public IActionResult GetSpell(int id)
 {
     var spell = context.HPspell.Find(id);
     
     if (spell == null)
            return NotFound();
    return Ok(spell);
 }
 
 [Route("{id}")]
 [HttpDelete]

 public IActionResult DeleteSpell(int id)
 {
     var spell = context.HPspell.Find(id);
     if (spell == null)
        return NotFound();
    context.HPspell.Remove(spell);
    context.SaveChanges();
    return NoContent();
 }

 [HttpPut]
 public IActionResult UpdateSpell([FromBody] HPSpell UpdateSpell)
 {
     var oldSpell = context.HPspell.Find(UpdateSpell.Id);
     if (oldSpell == null)
            return NotFound();
        oldSpell.Name = UpdateSpell.Name;
        oldSpell.Effect = UpdateSpell.Effect;
  {
      
  }

    context.SaveChanges();
    return Ok(oldSpell);
 }

}
