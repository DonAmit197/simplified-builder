namespace Builder.Api.Orm.Services;

public class HashService
{
    public string HashString(string input)
    {
        var hash = BCrypt.Net.BCrypt.HashPassword(input);
        return hash;
    }

    public bool VerifyHash(string input, string hash)
    {
        var isValid = BCrypt.Net.BCrypt.Verify(input, hash);
        return isValid;
    }
}
