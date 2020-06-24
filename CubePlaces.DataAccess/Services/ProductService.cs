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
        private readonly List<Product> Products;

        public ProductService()
        {
            string currentDirectory = Directory.GetCurrentDirectory();
            JsonFilePath = currentDirectory + "\\Data\\products.json";
            using (var reader = new StreamReader(JsonFilePath))
            {
                JsonFile = reader.ReadToEnd();
            }
            Products = JsonConvert.DeserializeObject<List<Product>>(JsonFile);
        }

        public List<Product> GetAll()
        {
            return Products;
        }

        public Product GetById(int id)
        {
            Product product = Products.Find(
                delegate (Product p)
                {
                    return p.Id == id;
                }
            );

            return product;
        }
    }
}
