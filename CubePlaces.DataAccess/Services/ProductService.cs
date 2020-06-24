using CubePlaces.Domain.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Threading.Tasks;

namespace CubePlaces.DataAccess.Services
{
    public class ProductService
    {
        private readonly string JsonFilePath;
        private readonly string JsonFile;

        public ProductService()
        {
            string currentDirectory = Directory.GetCurrentDirectory();
            JsonFilePath = currentDirectory + "\\Data\\products.json";
            using (var reader = new StreamReader(JsonFilePath))
            {
                JsonFile = reader.ReadToEnd();
            }
        }

        public List<Product> GetAll()
        {
            List<Product> products = JsonConvert.DeserializeObject<List<Product>>(JsonFile);
            return products;
        }
    }
}
