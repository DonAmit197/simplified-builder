using System.ComponentModel.DataAnnotations;

namespace Builder.Api.Models;

public class FormCategory
{
    public int Id { get; set; }

    [MaxLength(100)]
    public string Name { get; set; }
}
