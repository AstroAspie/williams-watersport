var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.MapGet("/products", () => {
    var products = new[] {
        new { Id = 1, Name = "Product 1" },
        new { Id = 2, Name = "Product 2" },
        new { Id = 3, Name = "Product 3" },
    };
    return products;
});

app.Run();
