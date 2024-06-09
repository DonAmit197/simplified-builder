﻿namespace Builder.Api.Models;

public class Form
{
    public int Id { get; init; }

    public int UserId { get; set; }

    public string Content { get; set; }

    public bool IsDeleted { get; set; }

    public bool IsActive { get; set; }

    public string Url { get; set; }

    public FormSettings FormSettings { get; set; }

    public User User { get; set; }
}