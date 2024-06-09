namespace Builder.Api.Models;

public class FormSettings
{
    public int Id { get; set; }
    
    public int FormId { get; set; }

    public string Title { get; set; }

    public string DataEmailAddresses { get; set; }

    public Form Form { get; set; }
}
