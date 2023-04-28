namespace EditMe.Online.Services.Interface;
public interface IEmailManager
{
    Task Send(string to, string subject, string html, string from = null);
}

