let json = "{ bad json }";

try {
  let user = JSON.parse(json);
  console.log(user.name);
} catch(e) {
  console.log( "데이터에 에러가 있어 재요청을 시도합니다." );
  console.log( e.name );
  console.log( e.message );
}