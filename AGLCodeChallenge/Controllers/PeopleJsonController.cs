using RestSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Newtonsoft;
using Newtonsoft.Json.Linq;

namespace AGLCodeChallenge.Controllers
{
    public class PeopleJsonController : ApiController
    {
        [HttpGet]
        [Route("api/people")]
        public IHttpActionResult Get()
        {
            var client = new RestClient("http://agl-developer-test.azurewebsites.net/people.json");
            var request = new RestRequest(Method.GET);
            request.AddHeader("postman-token", "79eff028-402e-50a7-8104-73a2ee236734");
            request.AddHeader("cache-control", "no-cache");
            request.AddHeader("content-type", "application/json");
            IRestResponse response = client.Execute(request);

            
            return Ok(response.Content);
        }
    }
}
