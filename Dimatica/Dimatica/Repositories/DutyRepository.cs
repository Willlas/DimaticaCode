

using Dimatica.Entities.DTOs;
using Dimatica.Entities.Entities.Duties;
using Dimatica.Entities.Interfaces.Repositories;
using MongoDB.Bson;
using MongoDB.Driver;
using System.Collections.Generic;

namespace Dimatica.Repositories
{
    public class DutyRepository : IDutyRepository
    {
        private string dataBase = "Dimatica";
        private string mongoConnection = "mongodb+srv://SA:ZSotaU8QAz7teKxl@cluster0.cpl97.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


        private MongoClient _mongoClient;
        private IMongoDatabase _dataBase;

        public DutyRepository()
        {
            _mongoClient = new MongoClient(mongoConnection);
            _dataBase = _mongoClient.GetDatabase(dataBase);
        }

        public Duties Create(Duties entity)
        {
            var collection = _dataBase.GetCollection<Duties>("Duties");
            collection.InsertOne(entity);
            return entity;
        }

        public bool Delete(Duties entity)
        {
            var collection = _dataBase.GetCollection<Duties>("Duties");
            var deleteFilter = Builders<Duties>.Filter.Eq("id", entity.Id);
            collection.DeleteOne(deleteFilter);
            return true;
        }

        public List<Duties> Retrieve(PaginationDTO pagination)
        {
            var collection = _dataBase.GetCollection<Duties>(pagination.Entity);
            var response = collection.Find(new BsonDocument()).ToList();
            return response;
        }

        public Duties Update(Duties entity)
        {
            var collection = _dataBase.GetCollection<Duties>("Duties");
            var updateFilter = Builders<Duties>.Filter.Eq("id", entity.Id);
            var updateDefinition = Builders<Duties>.Update.Set("name", entity.Name);
            collection.UpdateOne(updateFilter, updateDefinition);
            return entity;
        }
    }
}
