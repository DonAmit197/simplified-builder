using System.ComponentModel.DataAnnotations;

namespace Builder.Api.Models;

public class User
{
    public int Id { get; init; }

    [MaxLength(320)]
    public string EmailAddress { get; set; }

    [MaxLength(100)]
    public string PasswordHash { get; set; }

    public IEnumerable<Form> Forms { get; } = [];
}
