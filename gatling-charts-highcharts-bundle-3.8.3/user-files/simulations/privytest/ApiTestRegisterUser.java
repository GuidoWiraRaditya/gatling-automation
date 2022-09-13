package privytest;

import java.util.*;
import java.util.concurrent.ThreadLocalRandom;

import io.gatling.javaapi.core.*;
import io.gatling.javaapi.http.*;
import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.*;

public class ApiTestRegisterUser extends Simulation {

  {
    HttpProtocolBuilder httpProtocol = http
      .baseUrl("http://pretest-qa.dcidev.id")
      .inferHtmlResources()
      .acceptHeader("application/json")
      .acceptEncodingHeader("gzip, deflate")
      .acceptLanguageHeader("en-US,en;q=0.9,ms;q=0.8")
      .contentTypeHeader("application/x-www-form-urlencoded")
      .doNotTrackHeader("1")
      .originHeader("http://pretest-qa.dcidev.id")
      .userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36");
    
    Map<CharSequence, String> headers_0 = new HashMap<>();
    headers_0.put("Cache-Control", "no-cache");
    headers_0.put("Pragma", "no-cache");
    
    String phoneNumber = "62" + ThreadLocalRandom.current().nextInt(10000000, 99999999);

    ScenarioBuilder scn = scenario("RegisterUser")
      .exec(
        http("happy - create user")
          .post("/api/v1/register")
          .headers(headers_0)
          .formParam("phone", phoneNumber)
          .formParam("password", "inipassword")
          .formParam("country", "indonesia")
          .formParam("latlong", "123456789")
          .formParam("device_token", "4693")
          .formParam("device_type", "0")
          .check(
            status().is(201),
            jsonPath("$.data.user.phone").is(phoneNumber),
            jsonPath("$.data.user.id").exists()
          )
      )
      .exec(
        http("negative - user already exist")
          .post("/api/v1/register")
          .headers(headers_0)
          .formParam("phone", phoneNumber)
          .formParam("password", "inipassword")
          .formParam("country", "indonesia")
          .formParam("latlong", "123456789")
          .formParam("device_token", "4693")
          .formParam("device_type", "0")
          .check(
            status().is(422),
            jsonPath("$.error.errors").is("Phone has already been taken")
          )
      )
      .exec(
        http("negative - wrong phone number format")
          .post("/api/v1/register")
          .headers(headers_0)
          .formParam("phone", "!@##&$^%@#%@#$")
          .formParam("password", "inipassword")
          .formParam("country", "indonesia")
          .formParam("latlong", "123456789")
          .formParam("device_token", "4693")
          .formParam("device_type", "0")
          .check(
            status().is(201)
            //bug, need to add input validation on BE
          )
      );

	  setUp(scn.injectOpen(atOnceUsers(1))).protocols(httpProtocol);
  }
}
