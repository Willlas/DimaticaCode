using MongoDB.Bson.Serialization.Attributes;

namespace Dimatica.Entities.Entities.Duties
{
    public class Duties
    {
        [BsonElement("Id")]
        public string Id { get; set; }
        [BsonElement("Name")]
        public string Name { get; set; }
    }
}
