namespace Builder.Api.Models;

public class User
{
    public int Id { get; init; }

    public string EmailAddress { get; set; }

    public string PasswordHash { get; set; }

    public List<Form> Forms { get; } = [];
}
