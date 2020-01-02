---
category: Think.js
        
tags:
  - Install Think.js
date: 2020-01-02
header-image: /assets/img/header-image-02.jpg
title: Bắt đầu cơ bản với Think.JS - Node.JS
vssue-id: 2
vssue: false
---
Đây là một bài viết về framework *ThinkJS*, vì có rất ít phần giới thiệu về framework trên Internet, vì vậy đây là một lời giải thích chung về sự hiểu biết cơ bản về framework và cung cấp một dự án để thực hành các chức năng cơ bản.

Vì đây là framework dựa trên Node.js, trước tiên kiến thức về Node.js cho người mới bắt đầu.
## Mô tả ngắn gọn về Node.js
Nodejs là một mã nguồn được xây dựng dựa trên nền tảng Javascript V8 Engine. Nodejs sử dụng rộng bởi hàng ngàn lập trình viên trên toàn thế giới. NodeJS có thể chạy trên nhiều nền tảng hệ điều hành khác nhau từ Windows cho tới Linux, MacOs nên đó cũng là một lợi thế. NodeJS cung cấp các thư viện phong phú ở dạng Javascript Module khác nhau giúp đơn giản hóa việc lập trình và giảm thời gian ở mức thấp nhất.

Trước tiên bạn cần vào trang chủ [Nodejs.org](http://nodejs.org/) để download và cài đặt Nodejs.
## Chương trình Node đầu tiên
::: tip Tìm hiểu về một số thành phần của ứng dụng node. js:
  1. **Giới thiệu mô-đun cần thiết**: chúng tôi có thể sử dụng hướng dẫn yêu cầu để tải mô-đun node. js.
  2. **Tạo một máy chủ**: máy chủ có thể nghe các yêu cầu của khách hàng, tương tự như các máy chủ như Apache, Nginx, v.v.
  3. **Nhận yêu cầu và trả lời các yêu cầu**: máy chủ dễ tạo, khách hàng có thể gửi yêu cầu http bằng cách sử dụng trình duyệt hoặc thiết bị đầu cuối và máy chủ trả về dữ liệu thích hợp khi nhận được yêu cầu.
:::
Bước 1: Tạo file app.js với nội dung:
```js
var http = require('http');  //Yêu cầu mô-đun http đi kèm với Nodejs và gán mô-đun cho biến http
http.createServer(function (request, response) {  //Gọi mô-đun được cung cấp bởi mô-đun http
    // Gửi HTTP  
    // HTTP Giá trị trạng thái: 200 : OK
    // Loại nội dung: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // Gửi dữ liệu phản hồi "Hello World"
    response.end('Hello VNodeJS\n');
}).listen(3000); // 3000 là port mặc định  bạn có thể thay nó thành 8888, 8080,...

// in thông tin server
console.log('Server running at http://127.0.0.1:3000/');
```
Bước 2: Chúng ta lại mở cửa sổ Node.js Command Prompt lên và gõ dòng lệnh để thực thi file app.js này
`node app.js`

Và sẽ được kết quả dòng chữ Server running at `http://127.0.0.1:3000` sẽ hiện lên ở Node.js Command Prompt. 

Bạn có thể mở trình duyệt lên và gõ `http://127.0.0.1:3000` sẽ thấy kết quả hiển thị ra màn hình dòng chữ "Hello VNodeJS".
## Node.js back-end framework
Express và Koa (framework điển hình )

Express: Framework Node.js nhẹ và linh hoạt cho các ứng dụng Build-up nhanh chóng và sử dụng rộng rãi. [Tài liệu chính thức Express](https://expressjs.com/)

Koa:được xây dựng bởi đội ban đầu của Express, nó là dành riêng cho một nhỏ hơn, biểu cảm hơn, và mạnh mẽ hơn nền tảng trong ứng dụng web và phát triển API. Bằng cách tận dụng các chức năng không đồng bộ, Koa giúp bạn loại bỏ các chức năng gọi lại và mạnh mẽ tăng cường xử lý lỗi. [Koa tài liệu chính thức](https://koajs.com/)

*Express* và *Koa* là hai **Framework Back-end** cơ bản nhất cho node.js. Bởi vì xây dựng một ứng dụng vẫn đòi hỏi rất nhiều mã, có rất nhiều framework khác trên đầu trang của họ để giảm bớt văn bản loại mã. (ví dụ: ThinkJS, Egg.js, v.v.)
## ThinkJS
Giới thiệu: ThinkJS là một Framework Node.js định hướng trong tương lai, tích hợp một số thực tiễn tốt nhất của dự án để làm cho việc phát triển cấp doanh nghiệp trở nên đơn giản và hiệu quả. Bắt đầu với 3.0, frameword cơ bản dựa trên triển khai Koa2.x và tương thích với tất cả các tính năng của Koa.
::: tip Đặc trưng:
  - Dựa trên *Koa2.x*, tương thích với`middleware`
  - Hạt nhân nhỏ, hỗ trợ và các trình bổ sung khác`ExtendAdapter`
  - Hiệu suất tuyệt vời, phạm vi kiểm tra đơn vị cao
  - Built-in tự động biên dịch, cơ chế Cập nhật tự động, dễ dàng để phát triển nhanh chóng
  - Sử dụng một cách thanh lịch hơn để xử lý các vấn đề không đồng bộ và không còn hỗ trợ chúng`async/await*/yield`
:::
### Bắt đầu nhanh
Với cấu trúc được cung cấp bởi ThinkJS, bạn có thể nhanh chóng tạo ra một dự án. Để sử dụng nhiều tính năng hơn ES6, Framework yêu cầu phiên bản node.js có ít nhất 6.x, và các phiên bản LTS được khuyến nghị.
### Cài đặt lệnh ThinkJS

`npm install -g think-cli`
Sau khi cài đặt xong, sẽ có một lệnh thinkjs trong hệ thống (think-CLI số phiên bản có thể được xem qua thinkjs-v)
### Tạo dự án
```sh
thinkjs new demo  //Tạo một dự án có tên là demo
npm install   //Cài đặt phụ thuộc
npm start  //Chạy dự án
```
### Cấu trúc dự án
Cấu trúc dự án được tạo ra theo mặc định là như sau:
```
|--- development.js   //Entry files in the development environment
|--- nginx.conf  //nginx Configuration file
|--- package.json
|--- pm2.json //pm2 Configuration file
|--- production.js //Entry file in production environment
|--- README.md
|--- src
| |--- bootstrap  //Start the auto-execute directory 
| | |--- master.js //Master Automatic execution under process
| | |--- worker.js //Worker Automatic execution under process
| |--- config  //Configuration file directory
| | |--- adapter.js  // adapter Configuration file 
| | |--- config.js  // Default config 
| | |--- config.production.js  //A default configuration file in a production environment, and config.js merge 
| | |--- extend.js  //extend Configuration file 
| | |--- middleware.js //middleware Configuration file 
| | |--- router.js //Custom routing profile
| |--- controller  //Controller directory 
| | |--- base.js
| | |--- index.js
| |--- logic //logic table of Contents
| | |--- index.js
| |--- model //Model Catalog
| | |--- index.js
|--- view  //Template directory
| |--- index_index.html
```
### Các tính năng cơ bản
**Config (cấu hình)**
Trong một dự án thế giới thực, một loạt các cấu hình chắc chắn là cần thiết, bao gồm cả cấu hình yêu cầu của khuôn khổ và cấu hình của dự án tùy biến. ThinkJS quản lý tất cả các cấu hình thống nhất, tập tin được đặt trong `src/config/directory`, và được chia thành các hồ sơ khác nhau theo các chức năng khác nhau.

- `config.js` Một số cấu hình phổ biến
- `adapter.js` cấu hình bộ điều hợp (cấu hình cơ sở dữ liệu)
- `router.js` Cấu hình định tuyến tùy chỉnh
- `middleware.js` Cấu hình middleware
- `validator.js` Cấu hình kiểm tra dữ liệu
- `extend.js` mở rộng cấu hình
Cấu hình định dạng
```js
// src/config.js

module.exports = {
  port: 1234, // port ứng dụng
  redis: {
    host: '192.168.1.2',
    port: 2456,
    password: ''
  }
}
```
Giá trị cấu hình có thể là một chuỗi đơn giản hoặc một đối tượng phức tạp, tùy thuộc vào loại dựa trên nhu cầu cụ thể.

**Sử dụng cấu hình**
Khung cung cấp truy cập nhanh vào cấu hình theo nhiều cách khác nhau trong môi trường khác nhau:

- Trong ctx (bối cảnh), bạn có thể nhận được cấu hình`ctx.config(key)`
- Trong bộ điều khiển, bạn có thể nhận được cấu hình`controller.config(key)`
- Trong các trường hợp khác, bạn có thể nhận được cấu hình`think.config(key)`

Trong thực tế, và là một cách thuận tiện hơn để có được cấu hình dựa trên bao bì.`ctx.configcontroller.configthink.config`
#### Adapter (bộ điều hợp)

Adapter được sử dụng để giải quyết một loạt các triển khai của một lớp chức năng cung cấp cùng một tập hợp các giao diện, tương tự như các mô hình nhà máy trong các mẫu thiết kế. Chẳng hạn như: hỗ trợ cho nhiều cơ sở dữ liệu, hỗ trợ cho một loạt các mẫu công cụ, và như vậy. Bằng cách này, nó rất dễ dàng để chuyển đổi giữa các loại khác nhau. Adapter thường được sử dụng với extend.

Khung cung cấp một số bộ điều hợp theo mặc định, chẳng hạn như: dự án có thể được mở rộng khi cần thiết hoặc bộ điều hợp bên thứ ba có thể được giới thiệu.`View、Model、Cache、Session、Websocket`

**Cấu hình bộ điều hợp**

Cấu hình của bộ điều hợp là ở định dạng sau:`src/config/adapter.js`
```js
const nunjucks = require('think-view-nunjucks');
const ejs = require('think-view-ejs');
const path = require('path');

exports.view = {
  type: 'nunjucks', // Mẫu mặc định nunjucks
  common: { //Sắp xếp phổ quát
    viewPath: path.join(think.ROOT_PATH, 'view'), // đọc file ở thư mục view
    sep: '_',
    extname: '.html' // cấu hình mặc định file ở thư mục view .html
  },
  nunjucks: { // nunjucks Cấu hình cụ thể
    handle: nunjucks
  },
  ejs: { // ejs Cấu hình cụ thể
    handle: ejs,
    viewPath: path.join(think.ROOT_PATH, 'view/ejs/'),
  }
}

exports.cache = {
  ...
}
```
Cấu hình bộ điều hợp hỗ trợ môi trường hoạt động và có thể được cấu hình khác nhau tùy thuộc vào môi trường hoạt động, chẳng hạn như: cơ sở dữ liệu trong môi trường phát triển và môi trường sản xuất thường khác nhau, tại thời gian này có thể được kết hợp bằng cách lưu trữ cấu hình khác nhau và hệ thống được bắt đầu bằng việc đọc cấu hình môi`adapter.development.jsadapter.production.js`

Độ phân giải cấu hình bộ điều hợp

Cấu hình bộ điều hợp lưu trữ cấu hình chi tiết trong tất cả các loại, cần được giải quyết khi sử dụng, và chọn một trong những tương ứng để sử dụng. Ví dụ: trong tệp cấu hình ở trên, cấu hình chi tiết của hai công cụ mẫu được cấu hình, nhưng chỉ một công cụ mẫu được sử dụng trong một kịch bản cụ thể. Tất nhiên, độ phân giải cấu hình không yêu cầu các cuộc gọi cụ thể của người tiêu dùng trong dự án, và thường được xử lý trong phương thức `plug-in-response.nunjucksejs`

Bộ điều hợp sử dụng

Adapter là các hiện thực khác nhau của một lớp chức năng mà thường không được sử dụng độc lập, nhưng được sử dụng kết hợp với các phần mở rộng tương ứng. Sử dụng với phần mở rộng.`：view Adapter（think-view-nunjucks、think-view-ejs）think-view`

Cơ sở dữ liệu: (sử dụng với phần mở rộng)`model Adapterthink-mongo`

model adapter

```js
/**
 * model adapter config
 * @type {Object}
 */
exports.model = {
  type: 'mongo', // Loại được sử dụng theo mặc định, bạn có thể chỉ định chuyển đổi tham số khi gọi
  common: { // Sắp xếp phổ quát
    logConnect: true, // Có in thông tin kết nối cơ sở dữ liệu không
    logger: msg => think.logger.info(msg) // Thông tin in logger
  },
  // cấu hình CSDL MongoDB
  mongo: {
    host: '127.0.0.1',
    port: 27017,
    user: '',
    password: '',
    database: 'vnodejs', // Tên cơ sở dữ liệu
    options: ''
  }
};
```
extend
```js
const view = require('think-view');
const model = require('think-model');
const cache = require('think-cache');
const session = require('think-session');
const mongo = require('think-mongo');

module.exports = [
  view, // make application support view
  model(think.app),  ////Pass think.app to model extension
  mongo(think.app),
  cache,
  session
];

```
Extend (Extension)

Mặc dù khuôn khổ có nhiều tính năng tích hợp, các chức năng được cung cấp trong phát triển dự án thực thế giới là xa đầy đủ. Một cơ chế mở rộng đã được giới thiệu trong 3,0 để tạo thuận lợi cho việc mở rộng khuôn khổ. Các loại phần mở rộng được hỗ trợ là:`think application context request response controller logic service`

Nhiều tính năng tích hợp trong khuôn khổ cũng được mở rộng, chẳng hạn như:`SessionCache`
#### Context
Context là một đối tượng trong Koa rằng quy trình yêu cầu người dùng trong suốt vòng đời yêu cầu. Nói chung được sử dụng, gọi là `ctx.middlewarecontrollerlogic`
Đối tượng được kế thừa trong khuôn khổ và đã mở rộng một số thuộc tính rất hữu ích và phương pháp thông qua cơ chế mở rộng.

Ví dụ:

*ctx.state*
Không gian tên khuyến nghị khi đi qua thông tin giữa middleware và gửi thông tin cho một mẫu. Tránh thêm tài sản trực tiếp vào ctx, có thể ghi đè lên các tài sản hiện có và gây ra các vấn đề lạ.

```js
ctx.state.user = await User.find(id);
```

Điều này cho phép thu được giá trị tương ứng trong `Controller.this.ctx.state.user`
```js
module.exports = class extends think.Controller {
  indexAction() {
    const user = this.ctx.state.user;
  }
}
```
*ctx.header*
Nhận tất cả các thông tin tiêu đề, tương đương với.`ctx.request.header`
```js
const headers = ctx.headers;
```
*ctx.URL*
Nhận địa chỉ yêu cầu.
 #### Middleware (middleware)

Middleware, được gọi là middleware, là một khái niệm rất quan trọng trong Koa, mà làm cho nó dễ dàng để xử lý yêu cầu của người dùng.

Các định dạng *middleware* là một chức năng cao thứ tự, và chức năng bên ngoài nhận được một tham số, mà làm cho nó dễ dàng hơn cho các *middleware* để cung cấp một số thông tin cấu hình để biến một số chức năng bật/tắt. Sau khi thực hiện, một chức năng khác được trả về, nhận, thông số, là viết tắt, là một đối tượng trong vòng đời yêu cầu hiện tại, lưu trữ một số thông tin liên quan về yêu cầu hiện tại và giá trị trả lại là Promise cho middleware tiếp theo được gọi, giúp dễ dàng xử lý Post-logic. (Quá trình thực hiện là một mô hình hành tây)`options ctx next ctx context next`

*Cấu hình định dạng*
Để tạo thuận lợi cho việc quản lý và sử dụng middleware, khuôn khổ sử dụng hồ sơ để quản lý các middleware, đó là.`src/config/middleware.js`
```js
const path = require('path')
const isDev = think.env === 'development'

module.exports = [
  {
    handle: 'meta', // Chức năng xử lý Middleware
    options: {   // Cấu hình được yêu cầu bởi phần mềm trung gian hiện tại
      logRequest: isDev,
      sendResponseTime: isDev,
    },
  },
  {
    handle: 'resource',
    enable: isDev, // Có bật phần mềm trung gian hiện tại không
    options: {
      root: path.join(think.ROOT_PATH, 'www'),
      publicPath: /^\/(static|favicon\.ico)/,
    },
  }
]
```
Mục cấu hình là một danh sách các middleware để sử dụng trong dự án, mỗi thuộc tính hỗ trợ như,,,.`handle enable options match`

`handle`

Các chức năng xử lý middleware có thể được tích hợp vào hệ thống, nhập khẩu bên ngoài hoặc middleware trong một dự án.

`enable`

Cho dù để bật middleware hiện tại.

`options`

Mục cấu hình được truyền cho middleware, dưới dạng một đối tượng, có trong middleware.

`match`

Các middleware được thực hiện sau khi kết hợp một quy tắc cụ thể, hỗ trợ hai cách, một đường dẫn phù hợp và các chức năng tùy chỉnh khác phù hợp.

Các middleware tích hợp của khung

Khung có một số middleware được xây dựng trong và có thể được tham chiếu trực tiếp bằng chuỗi.

- `meta` Hiển thị một số thông tin meta. Ví dụ: gửi số phiên bản ThinkJS, thời gian xử lý giao diện, v.v.
- `resource` Xử lý các nguồn lực tĩnh, môi trường sản xuất được khuyến khích để đóng, trực tiếp với xử lý máy chủ web có thể
- `trace` Xử lý lỗi, môi trường phát triển sẽ được chi tiết lỗi hiển thị thông tin xử lý, cũng có thể tùy chỉnh trang lỗi hiển thị
- `payload` Xử lý nộp mẫu và tải lên tập tin, tương tự như`koa-bodyparser middleware`
- `router` Độ phân giải đường, bao gồm độ phân giải tuyến tùy chỉnh
- `logic` Cuộc gọi logic, kiểm tra dữ liệu
- `controller` bộ điều khiển và hành động

Tùy chỉnh middleware trong một dự án

Đôi khi một dự án thêm middleware vào một nhu cần cụ thể, vì vậy bạn có thể đặt nó trong một thư mục và sau đó tham khảo nó trực tiếp bằng chuỗi.`src/middleware`
```js
// middleware/log.js

const defaultOptions = {
  consoleExecTime: true // Có in cấu hình thời gian thực hiện hay không
}
module.exports = (options = {}) => {
  // Hợp nhất cấu hình đến
  options = Object.assign({}, defaultOptions, options);
  return (ctx, next) => {
    if(!options.consoleExecTime) {
      return next(); // Nếu bạn không cần in thời gian thực hiện, hãy gọi trực tiếp logic thực thi tiếp theo
    }
    const startTime = Date.now();
    let err = null;
    // gọi next để đếm tất cả thời gian của logic thực thi tiếp theo    
    return next().catch(e => {
      err = e; // Ở đây, lỗi đầu tiên được lưu trữ trên một đối tượng lỗi, thuận tiện cho việc đếm thời gian thực hiện trong trường hợp có lỗi.
    }).then(() => {
      const endTime = Date.now();
      console.log(`request exec time: ${endTime - startTime}ms`);
      if(err) return Promise.reject(err); // Nếu có lỗi trong logic thực thi tiếp theo, lỗi được trả về
    })
  }
}
```
Cách sử dụng: trong`/src/config/middleware.js`
```js
module.exports = [
  {
    handle: 'log', // Chức năng xử lý Middleware
    options: {   // Cấu hình được yêu cầu bởi phần mềm trung gian hiện tại
      consoleExecTime: true,
    },
  }
]
```
Giới thiệu middleware bên ngoài

Giới thiệu một middleware bên ngoài là rất đơn giản và chỉ cần đi vào.require
```js
const cors = require('koa2-cors');
module.exports = [
  ...,
  {
    handle: cors,
    option: {
      origin: '*'
    }
  },
  ...
]
```
### Controller
Trong mô hình MVC, `Controller` là một phần xử lý logic của yêu cầu của người dùng. 
Ví dụ: các hoạt động liên quan đến người dùng được đưa vào, mỗi hoạt động là một action bên trong.user.js

*Tạo Controller*

Controller trong dự án cần phải kế thừa class để bạn có thể sử dụng một số phương pháp tích hợp. Tất nhiên, dự án có thể tạo ra một số class cơ sở phổ biến, và sau đó là controller thực tế được kế thừa từ class cơ sở này.`think.Controller`

Khi một dự án được tạo ra, một class cơ sở được tự động tạo ra, và những người khác kế thừa class.`base.jscontroller`

Thực thi hành động

Thực hiện hành động được thực hiện thông qua middleware, tên phương thức của xxxAction được tìm thấy và được gọi bằng giá trị trong Controller, và phương pháp ma thuật có liên quan được gọi theo thứ tự sau:think-controllerctx.action


- Lớp điều khiển `instantiated`, thông qua vào đối tượng`ctx`
-Gọi nếu phương pháp `__before` tồn tại, và nếu một giá trị được trả lại, ngừng tiếp tục`false`
- Nếu phương pháp tồn tại, thực hiện và nếu giá trị trả lại, dừng tiếp tục`xxxActionfalse`
- Nếu phương pháp không tồn tại nhưng phương pháp `__call` tồn tại, hãy gọi `__call` và nếu giá trị trả lại, dừng gửi trên`xxxActionfalse`
- Nếu phương pháp `__after` tồn tại, hoạt động trước là `performed__before`
- Nếu phương pháp `__after` tồn tại, thực thi

`__Before` trước khi hoạt động


Trong một dự án, có những lúc bạn cần làm điều gì đó ở một nơi thống nhất, chẳng hạn như xác định xem bạn có đăng nhập hay không và bạn không thể tiếp tục với hành vi nếu bạn không làm như vậy. Trong trường hợp này, bạn có thể thực hiện việc này thông qua `built-in.__before`

`__before`Được gọi trước khi hành động cụ thể được gọi là, để bạn có thể làm một số chế biến trong đó.

Nếu kế thừa lớp học cần phải gọi phương thức của cha mẹ, bạn có thể làm như vậy thông qua.`__before super.__before`

Đăng thao tác __after

Thao tác đăng tương ứng, chỉ sau khi hành động cụ thể được thực hiện, và nếu thực thi hành động cụ thể trả lại, sau đó không còn xử.`__after __before false __after`

### Logic
Khi xử lý yêu cầu của người dùng trong hành động, thường đầu tiên để có được dữ liệu do người dùng gửi, và sau đó kiểm tra xem nó, nếu kiểm tra không có vấn đề trước khi hoạt động theo dõi, khi kiểm tra các tham số được hoàn thành, đôi khi cũng cần phải thực hiện phán quyết quyền, đây là chính xác trước khi xử lý logic thực. 
Đặt tất cả các mã này trong một hành động là ràng buộc để làm cho mã của Action rất phức tạp và dài.


Để giải quyết vấn đề này, ThinkJS thêm một lớp logic ở phía trước của bộ điều khiển, và hành động trong logic và hành động trong bộ điều khiển, và hệ thống tự động gọi Action trong logic trước khi gọi hành động trong bộ điều khiển.
### Router 
Khi người dùng truy cập một địa chỉ, một logic tương ứng là cần thiết để xử lý nó. Theo cách truyền thống của chế biến, một yêu cầu tập tin tương ứng, nếu truy cập, sẽ có tập tin thực thể này trong thư mục tương ứng của dự án. Mặc dù cách tiếp cận này có thể giải quyết vấn đề, nhưng sẽ dẫn đến rất nhiều tập tin, và có lẽ nhiều tập tin logic chức năng thực sự là tương đối đơn giản.`/user/about.php /user/about.php`


Trong mô hình phát triển MVC ngày nay, các vấn đề như vậy thường được giải quyết bằng định tuyến. Giải pháp là đầu tiên bản đồ tất cả các yêu cầu của người dùng đến một tập tin nhập cảnh (ví dụ), sau đó khuôn khổ giải quyết địa chỉ của yêu cầu hiện tại, phân tích các chức năng tương ứng tìm kiếm để thực hiện theo cấu hình hoặc quy ước, và sau đó gọi và sau đó đáp ứng yêu cầu của người dùng.`index.php`


Kể từ khi `node.js` bắt đầu dịch vụ HTTP (S) của riêng mình, dễ dàng xử lý ánh xạ định tuyến bằng cách tổng hợp các yêu cầu của người dùng vào một tệp nhập.


Trong ThinkJS, khi một người dùng truy cập một URL, nó là cuối cùng phản ứng với các hành động cụ thể trong bộ điều khiển. Vì vậy, nó là cần thiết để phân tích ra các URL tương ứng với bộ điều khiển và hành động, việc phân tích này được thực hiện thông qua các mô-đun.`think-router`

*Cấu hình router*


  `think-router`là một middleware, và dự án được tạo ra theo mặc định và được thêm vào hồ sơ.`src/config/middleware.js`

*Xử lý trước đường dẫn*


Khi người dùng truy cập Dịch vụ, ban đầu có thể được lấy thông qua các thuộc tính, nhưng tên đường cần phải được xử lý trước sau giải quyết của bộ điều khiển và hành động. Ví dụ, loại bỏ hậu tố URL và các hoạt động khác, và cuối cùng nhận được thực sự theo dõi cần phải giải quyết. Quy tắc độ phân giải tuyến mặc định là.`ctx.url pathname pathname .html pathname /controller/action`

Đối với các bộ điều khiển trong ThinkJS, bạn có thể tùy chỉnh router mà không cần viết nó.

| pathname	 | Subset Controller	 | controller	| Action | Note |
|--------------|-------|------|-------|-------|
| / | No | index	 | index	 | Controllller, action giá trị mặc định cho cấu hình	 |
| /User | No | user | index | Action giá trị mặc định cho cấu hình	 |
| /user/login	 | No |user | login | |
| /console/user/login	 | 	Yes | console/user	| login | Có bộ điều khiển tập hợp con console/user |
| /console/user/login/aaa/b	 |	Yes | console/user	 | login |aaa/b còn lại không được phân tích cú pháp|

Quy tắc định tuyến tùy chỉnh


Mặc dù phương pháp mặc định định tuyến giải quyết có thể đáp ứng các yêu cầu, nhưng đôi khi làm cho URL để trông ít thanh lịch, chúng tôi muốn URL được ngắn hơn, đó là thuận lợi hơn để bộ nhớ và tuyên truyền. Framework này cung cấp các Route tùy chỉnh để xử lý yêu cầu này.

Cấu hình quy tắc định tuyến tùy chỉnh là mảng hai chiều.`src/config/router.js`
### Xử lý không đồng bộ
Node. js sử dụng một mô hình I/O không chặn sự kiện, và nhiều giao diện không đồng bộ, chẳng hạn như các thao tác tập tin, yêu cầu mạng. Mặc dù giao diện đồng bộ hóa cho các tập tin hoạt động được cung cấp, chúng bị chặn và không nên được sử dụng trong trường hợp đặc biệt.

Đối với giao diện không đồng bộ, API chính thức là ở dạng, nhưng cách tiếp cận này là một vấn đề có thể dễ dàng phát sinh sau khi logic kinh doanh là phức tạp, và để giải quyết vấn đề này có những giải pháp như 、、 、, ThinkJS sử dụng một giải pháp để giải quyết các vấn đề không đồng bộ.`callback callback hell event Promise Generator function Async function async function`


Chức năng async

Chức năng async sử dụng cú pháp để xác định chức năng, chẳng hạn như:`async/await`
```js
async function fn() {
  const value = await getFromApi();
  doSomethimgWithValue();
}
```
- Phải có, nhưng không nhất thiết phải có `await async async await`
- `Async functions` Nó có thể là cách của một chức năng bình thường, hoặc nó có thể là một cách`Arrow functions`
- `await` Sau khi bạn cần phải kết nối, nếu không, bạn sẽ không chờ đợi để xử lý`Promise Promise`
- Giá trị trả lại phải `Promise`

Giá trị trả lại và biểu thức sau đây là cả hai, được dựa trên. Nếu biểu thức sau trả lại giá trị không, có một số cách để bọc nó như.`await Promise Async functions Promise await Promise Promise`
## Mô hình/cơ sở dữ liệu
### Cơ sở dữ liệu (MYSQL)
Trong phát triển dự án, nó thường là cần thiết để vận hành cơ sở dữ liệu (ví dụ, thêm, xóa và thay đổi chức năng), chính tả thủ công của câu lệnh SQL là rất cồng kềnh, nhưng cũng chú ý đến các vấn đề bảo mật như SQL Injection. Khuôn khổ này cung cấp chức năng mô hình để tạo thuận lợi cho hoạt động của cơ sở dữ liệu.

Mở rộng chức năng mô hình

Khuôn khổ không cung cấp các chức năng của mô hình theo mặc định, và phần mở rộng tương ứng cần phải được nạp để hỗ trợ các mô-đun tương ứng. Sửa đổi hồ sơ mở rộng để thêm cấu hình sau:`think-model src/config/extend.js`
```js
const model = require('think-model');
module.exports = [
  model(think.app) // Làm cho khung hỗ trợ chức năng của mô hình
]；
```
Cấu hình cơ sở dữ liệu


Vì mô hình hỗ trợ nhiều cơ sở dữ liệu, tệp cấu hình được định dạng theo cách và đường dẫn tệp `src/config/adapter.js`

Mysql


MySQL của adapter là, cơ bản được dựa trên việc thực hiện thư viện MySQL, kết nối cơ sở dữ liệu bằng cách sử dụng một hồ bơi kết nối, với một số mặc định của các kết nối của 1.`think-model-mysql`
```js
const mysql = require('think-model-mysql');
exports.model = {
  type: 'mysql',
  mysql: {
    handle: mysql, // Adapter handle
    user: 'root', // Tên đăng nhập
    password: '', // Mật khẩu
    database: '', // Cơ sở dữ liệu
    host: '127.0.0.1', // host
    port: 3306, // port
    connectionLimit: 1, // Số lượng kết nối trong nhóm kết nối. Mặc định là 1
    prefix: '', // Tiền tố bảng dữ liệu. Nếu có nhiều mục trong cơ sở dữ liệu, bảng dữ liệu giữa các mục có thể được phân biệt bằng tiền tố. vd vnodejs_user thì vnodejs_ là tiền tố
  }
```
Tạo một tập tin mô hình


Các tập tin mô hình được đặt trong thư mục và kế thừa các lớp cơ sở mô hình trong các định dạng tập tin:`src/model/think.Model`
```js
// src/model/user.js
module.exports = class extends think.Model {
  getList() {
    return this.field('name').select();
  }
}
```
Model instantiated

Khi dự án bắt đầu, tất cả các tập tin mô hình theo dự án được quét, và sau khi quét tất cả các lớp học mô hình được lưu trữ trên các đối tượng, mà là nhìn lên từ các đối tượng khi instantiated và nếu nó không được tìm thấy, các mô hình cơ sở lớp được instantiated. Model.`think.app.models`

Hoạt động CRUD

`think.Model` Lớp cơ sở cung cấp một cách tiếp cận phong phú để hoạt động CRUD, [được mô tả dưới đây](https://thinkjs.org/zh-cn/doc/3.0/relation_model.html).
### Mongodb
Đôi khi cơ sở dữ liệu quan hệ không đáp ứng được nhu cầu của dự án và yêu cầu MongoDB lưu trữ dữ liệu. Framework này cung cấp một phần mở rộng để hỗ trợ MongoDB, được thực hiện dựa trên.`think-mongomongodb`

Cấu hình cơ sở dữ liệu MongoDB

```js
Cấu hình cơ sở dữ liệu của MongoDB sử dụng lại cấu hình của mô hình cơ sở dữ liệu quan hệ, đó là cấu hình bộ điều hợp và được đặt trong mô hình. Đường dẫn tệp là `src/config/adapter.js`

exports.model = {
  type: 'mongo', // Loại được sử dụng theo mặc định, bạn có thể chỉ định chuyển đổi tham số khi gọi
  common: { // Sắp xếp phổ quát
    logConnect: true, // Có in thông tin kết nối cơ sở dữ liệu không
    logger: msg => think.logger.info(msg) // Thông tin in logger
  },
  mongo: {
    host: '127.0.0.1',
    port: 27017,
    user: '',
    password: '',
    database: '', // Tên cơ sở dữ liệu
    options: {
      replicaSet: 'mgset-3074013',
      authSource: 'admin'
    }
  }
}
```
Mở rộng các khả năng của MongoDB

Sửa đổi hồ sơ mở rộng và thêm cấu hình sau: `src/config/extend.js`
```js 
const mongo = require('think-mongo');

module.exports = [
  mongo(think.app) // Làm cho khung hỗ trợ chức năng của mô hình
]
```
Khi phần mở rộng được thêm vào,,, và các phương pháp được tiêm, nơi mà các tập tin lớp cơ sở cho mô hình Mongo, các phương pháp khác để instantiating mô hình Mongo, và là các wrapper của các phương pháp.`think.Mongo think.mongo ctx.mongo controller.mongo think.Mongo ctx.mongo controller.mongo think.mongo`
Tạo một tập tin mô hình
Các tập tin mô hình được đặt trong thư mục và kế thừa các lớp cơ sở mô hình trong các định dạng tập tin:`src/model/ think.Mongo`
```js
// src/model/user.js
module.exports = class extends think.Mongo {
  getList() {
    return this.field('name').select();
  }
}
```
Mô hình instantiated

Khi dự án bắt đầu, tất cả các tập tin mô hình theo dự án (thư mục) được quét, và sau khi quét, tất cả các lớp học mô hình được lưu trữ trên các đối tượng, mà là nhìn lên từ các đối tượng khi instantiated và, nếu không tìm thấy, các mô hình cơ sở lớp được instantiated.`src/model/ think.app.models think.Mongo`

[Api](https://thinkjs.org/zh-cn/doc/3.0/mongo.html)
### think object
Các đối tượng toàn cầu được xây dựng trong khuôn khổ để dễ dàng sử dụng trong dự án của bạn, mọi lúc, mọi nơi.`think`

[Api](https://thinkjs.org/zh-cn/doc/3.0/think.html)

Bắt đầu tùy chỉnh


Khi bạn bắt đầu một dự án thông qua hoặc, nó không được khuyến khích để thêm mã logic bổ sung cho các tệp nhập. Hệ thống cung cấp cho các cổng khác để bắt đầu tùy chỉnh.`npm startnode production.js`

Bootstrap


Khi hệ thống khởi động, các tệp trong thư mục được tải, như sau:  `src/boostrap/`

- Load Sunder-quy trình tổng thể `src/bootstrap/master.js`

- Quá trình tải Sunder-riêng biệt `src/bootstrap/worker.js`

Vì vậy, bạn có thể đặt một số logic mà cần phải được thực thi khi hệ thống bắt đầu và thực hiện nó trong các tập tin tương ứng.
### Service
Tệp dịch vụ được lưu trữ trong thư mục và định dạng sau:src/service/

```js
//  src/service/user.js
module.exports = class extends think.Service {
  find(id){
     return {username:'123',id:id} 
  }
}
```
`Service `cả hai kế thừa các lớp cơ sở, nhưng các lớp cơ sở không cung cấp bất kỳ phương pháp để mở rộng thông qua.`think.ServiceExtend`

Các lớp dịch vụ instantiating

Bạn có thể nhanh chóng lớp thông qua phương pháp, và có các phương pháp dịch vụ tương ứng trong bộ điều khiển và ctx, chẳng hạn như:, các phương pháp này là các phím tắt đến.`think.service Service ctx.service controller.service think.service`
```js
//controller

think.service('user').find(111)
```
Khi dự án bắt đầu, tất cả các tệp trong dự án được quét và đặt trong đối tượng, khởi tạo nó sẽ tìm kiếm tệp lớp tương ứng từ đối tượng và nếu không tìm thấy, lỗi được báo cáo.`servicesthink.app.services`


Đó là sự hiểu biết cơ bản của khuôn khổ, và nếu nó là một cái mới, bạn đang nhận biết cấu hình cơ bản dưới SRC, bao gồm làm thế nào để thêm các bộ chuyển đổi cơ sở dữ liệu để mở rộng mô hình (mở rộng) cùng một lúc, và sau đó hoạt động cơ sở dữ liệu trong các mô hình lớp. Lớp điều khiển có thể thực hiện giao diện (API) chức năng bằng cách tương tác trước và sau khi bảng, và trước sau đó đòi hỏi nhiều nghiên cứu chuyên sâu.

[Nguồn dự án](https://github.com/devhoangkien/thinkjs)
Lưu ý: dự án sử dụng cơ sở dữ liệu mongoDB. Giới thiệu về các tính năng cơ bản của dự án:
1. nhận tiêu đề yêu cầu trước-của-tiếp nhận (token) và xác thực người dùng
```js
//   controller/base.js
const jwt = require('jsonwebtoken');
const Token = require('../logic/token');

module.exports = class extends think.Controller {
    async __before() {
        if (this.ctx.config('allowUrls').indexOf(this.ctx.url) === -1) {
            if (!this.ctx.request.header.authorization) {
                this.fail(401, 'Không có chứng nhận');
                return false;
            } else {
                let payload = null;
                const authorization = this.ctx.request.header.authorization;
                const secret = this.ctx.config('secret');
                try {
                    payload = jwt.verify(authorization, secret); 
                     // Chức năng xác minh là logic/token
                    await Token.verify(authorization);
                    this.ctx.state.user_id = payload._id;
                } catch (error) {
                    this.fail(error.code, error.message);
                    return false;
                }
            }
        }
    }
};
```
2. đặt token, redis tiền gửi, đặt thời gian hết hạn

```js
//controller/user.js
 // Đăng nhập người dùng
    async loginUserAction() {
        const user = await this.mongo('user').loginUser(this.post('account'), this.post('password'));
        if (think.isEmpty(user)) {
            this.fail(403, 'Đăng nhập thất bại,Tên người dùng hoặc mật khẩu không chính xác');
        } else {
            let payload = {_id: user._id, account: user.account, password: user.password};
            let token = jwt.sign(payload, think.config('secret'), {expiresIn: 60 * 60 * 24 * 30});
            redis.set(token, payload._id.toString());
            redis.expire(token, token_expire);
            return this.success({token}, 'Đăng nhập thành công');
        }
    }
```
3. nhận ra các thông điệp đẩy thời gian thực wamp

```js
//controller/wamp.js
const autobahn = require('autobahn');
const wampConfig = require('../config/config').wamp;
const options = wampConfig.options;

module.exports = {
    roomInfo: (args) => {
        const connection = new autobahn.Connection(options);
        console.log("Thông tin kết nối",connection);
        connection.onopen = function (session) {
            session.publish(wampConfig.definedTopic, [args]);
            console.log("Chủ đề được đăng bởi wamp là:" + wampConfig.definedTopic);
            console.log(args);
        };
        console.log("end======");
        connection.open();
    }
};
```
```js
 //Để sử dụng
    /**
     * @param {any} user
     * @returns
     * Đẩy thông báo xác nhận ướt sau khi thêm thông tin nhà
     */
    async addRoomWamp(roomInfo) {
        let sum = 0;
        const rooms = await this.model('room').add(roomInfo);
        if(!(think.isEmpty(rooms))){
            const data = {sum: "lalal"};
            wamp.roomInfo(data);
        }
    }

```
4. xác minh quyền nhận dạng

```js
 //Nhận tất cả danh sách
    async getAllRoomsAction() {
        const userInfo = await this.mongo('user').findUserDetailInfo(this.ctx.state.user_id);
        console.log("userInfo", userInfo);
        if (!(think.isEmpty(userInfo)) && userInfo.role === 'admin') {
            this.success(await this.mongo('room').getAllRooms());
        } else {
            this.fail("Không được phép truy cập");
        }

    }
```
(Việc thực hiện là nhập vai trò người dùng phán quyết, có thể sử dụng ACL, sau đó dự án sẽ được Cập Nhật)
