using Builder.Api.Models;

namespace Builder.Api.Cqrs.Queries;

public static class MockData
{
    public static List<FormCategory> GetFormCategories()
    {
        return
        [
            new FormCategory
            {
                Id = -1,
                Name = "All forms"
            },
            new FormCategory
            {
                Id = 1,
                Name = "Customs"
            },
            new FormCategory
            {
                Id = 2,
                Name = "NZTE"
            },
            new FormCategory
            {
                Id = 3,
                Name = "Business Connect"
            }
        ];
    }

    public static List<Form> GetForms(DateTime now)
    {
        var categories = GetFormCategories();

        var forms = new List<Form>
        {
            new()
            {
                Id = 1,
                IsActive = true,
                UpdatedAt = now.AddDays(-5),
                FormSettings = new FormSettings
                {
                    Title = "Advance notice of arrival",
                    FormCategory = categories[1]
                }
            },
            new()
            {
                Id = 2,
                IsActive = true,
                UpdatedAt = now.AddDays(-20),
                FormSettings = new FormSettings
                {
                    Title = "Deferred Payment Account",
                    FormCategory = categories[1]
                }
            },
            new()
            {
                Id = 3,
                IsActive = true,
                UpdatedAt = now.AddDays(-17),
                FormSettings = new FormSettings
                {
                    Title = "Secure Export Scheme",
                    FormCategory = categories[2]
                }
            },
            new()
            {
                Id = 4,
                IsActive = false,
                UpdatedAt = now.AddDays(-12),
                FormSettings = new FormSettings
                {
                    Title = "Sponsorship for temporary entry",
                    FormCategory = categories[1]
                }
            },
            new()
            {
                Id = 5,
                IsActive = true,
                UpdatedAt = now.AddDays(-8),
                FormSettings = new FormSettings
                {
                    Title = "Transport operators",
                    FormCategory = categories[2]
                }
            },
            new()
            {
                Id = 6,
                IsActive = true,
                UpdatedAt = now.AddDays(-1),
                FormSettings = new FormSettings
                {
                    Title = "Prototype demo form",
                    FormCategory = categories[3]
                }
            }
        };

        return forms;
    }

}
