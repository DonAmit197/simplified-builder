using System.ComponentModel.DataAnnotations;

namespace Builder.Api.Models;

public class FormSettings
{
    public int Id { get; set; }
    
    public int FormId { get; set; }
    
    public int FormCategoryId { get; set; }

    [MaxLength(200)]
    public string Title { get; set; }

    [MaxLength(1000)]
    public string DataEmailAddresses { get; set; }

    public Form Form { get; set; }
    
    public FormCategory FormCategory { get; set; }
}
