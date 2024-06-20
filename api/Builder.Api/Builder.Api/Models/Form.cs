using System.ComponentModel.DataAnnotations;

namespace Builder.Api.Models;

public class Form
{
    public int Id { get; init; }

    public string Content { get; set; }

    public bool IsDeleted { get; set; }

    public bool IsActive { get; set; }

    [MaxLength(2048)]
    public string Url { get; set; }
    
    public int UserId { get; set; }

    public DateTime UpdatedAt { get; set; }

    public FormSettings FormSettings { get; set; }
    
    public User User { get; set; }
}
