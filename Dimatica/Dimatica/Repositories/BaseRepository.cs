

using Dimatica.Entities.Interfaces.Repositories;
using Dimatica.Entities.DTOs;
using System.Collections.Generic;
using MongoDB.Driver;

namespace Dimatica.Repositories
{
    public class BaseRepository : IBaseRepository<BaseDTO>
    {
        private string dataBase = "Dimatica";
        private string mongoConnection = "mongodb+srv://SA:ZSotaU8QAz7teKxl@cluster0.cpl97.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


        private MongoClient _mongoClient;
        private IMongoDatabase _dataBase ;
        public BaseRepository() {
            _mongoClient = new MongoClient(mongoConnection);
            _dataBase = _mongoClient.GetDatabase(dataBase);
        }
        public BaseDTO Create(BaseDTO entity)
        {
            throw new System.NotImplementedException();
        }

        public bool Delete(BaseDTO entity)
        {
            throw new System.NotImplementedException();
        }

        public List<BaseDTO> Retrieve(PaginationDTO pagination)
        {
            var collection = _dataBase.GetCollection<BaseDTO>(pagination.Entity);

            return collection.Find( );
        }

        public BaseDTO Update(BaseDTO entity)
        {
            throw new System.NotImplementedException();
        }
    }
}
