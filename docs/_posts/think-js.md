---
category: Think.js
tags:
  - Install Think.js
date: 2020-01-02
header-image: /assets/img/header-image-02.jpg
title: Hướng dẫn cài đặt Think.JS 
vssue-id: 1
vssue: false
---

## Bắt đầu
### Giới thiệu
`ThinkJS` là một khuôn khổ `node.js` bằng chứng trong tương lai tích hợp một số thực tiễn tốt nhất của dự án để làm cho doanh nghiệp cấp phát triển đơn giản và hiệu quả hơn. Bắt đầu với 3.0, khuôn khổ cơ bản dựa trên việc thực hiện Koa 2.x và tương thích với tất cả các tính năng của Koa.
### Đặc trưng
- Tương thích với middleware dựa trên `*Koa 2.x*`
- Hạt nhân nhỏ, hỗ trợ mở rộng, bộ điều hợp và các phần bổ sung khác
- Hiệu suất tuyệt vời, phạm vi kiểm tra đơn vị cao
- Built-in tự động biên dịch, cơ chế Cập nhật tự động cho sự phát triển dễ dàng và nhanh chóng
- Sử dụng một cách thanh lịch hơn để xử lý các vấn đề không đồng bộ, không còn được hỗ trợ **`async/await*/yield`**
- Hỗ trợ cho [Typescript](http://www.typescriptlang.org/) từ 3,2

## Cài đặt
Với giàn giáo được cung cấp bởi ThinkJS, bạn có thể nhanh chóng tạo ra một dự án. Để sử dụng thêm các tính năng ES6, Framework yêu cầu các phiên bản node. js ít nhất, và các Phiên bản LTS được khuyến nghị.6.x
### Cài đặt lệnh ThinkJS
`$ npm install -g think-cli`

Sau khi cài đặt xong, sẽ có một lệnh trong hệ thống (bạn có thể thấy số phiên bản của think-CLI, mà không phải là số phiên bản của thinkjs). Nếu bạn không thể tìm thấy lệnh này, xác minh rằng biến môi trường là chính xác. `thinkjsthinkjs -V`

Nếu bạn đang nâng cấp từ, bạn cần phải loại bỏ các lệnh trước đó và sau đó cài đặt lại. `2.x`
### Gỡ cài đặt các lệnh cũ
`$ npm uninstall -g thinkjs`
### Tạo dự án
Thực hiện để tạo ra một dự án, chẳng hạn như:`thinkjs new [project_name]`
```sh
$ thinkjs new demo;
$ cd demo;
$ npm install; 
$ npm start; 
```
Khi thực hiện xong, bạn sẽ thấy một Nhật ký như thế này dưới bảng điều khiển:
```sh
[2017-06-25 15:21:35.408] [INFO] - Server running at http://127.0.0.1:8360
[2017-06-25 15:21:35.412] [INFO] - ThinkJS version: 3.0.0-beta1
[2017-06-25 15:21:35.413] [INFO] - Enviroment: development
[2017-06-25 15:21:35.413] [INFO] - Workers: 8
```
Mở truy cập trình duyệt, nếu bạn đang tạo một dự án trên một máy từ xa, bạn cần phải thay thế IP với địa chỉ thích hợp.`http://127.0.0.1:8360/`

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
## Hướng dẫn nâng cấp
Tài liệu này là nâng cấp 2. x 3. x tài liệu và nâng cấp không được smoothed do thay đổi lớn giao diện nâng cấp. Tài liệu này được thêm về giao diện thay đổi guides.
### Danh sách các thay đổi
#### Thay đổi cốt lõi
3.0 từ bỏ kiến trúc cốt lõi của 2.x và được xây dựng trên phiên bản Koa 2.x, tương thích với tất cả các tính năng trong Koa. Những thay đổi chính là:

- Đối tượng trước thay đổi đối tượng`httpctx`
- Thực hiện một thay đổi hoàn toàn để kêu gọi hoàn thành`middleware`
- Nhiều tính năng được tích hợp trong khuôn khổ không còn có sẵn theo mặc định và có thể được hỗ trợ bởi các tiện ích mở rộng

#### Khởi động dự án
2.x khi một mục bắt đầu, tất cả các tệp trong thư mục sẽ được tự động tải. Trong 3,0, tất cả các tệp không được tải tự động nữa, mà thay vào đó:`src/bootstrap/`

- Tải các tập tin trong quá trình tổng thể`src/boostrap/master.js`
- Tải tệp trong quá trình riêng biệt`src/boostrap/worker.js`
Nếu bạn muốn tải các tệp khác, bạn có thể giới thiệu chúng bằng cách sử dụng phương pháp trong tệp tương ứng.`require`
#### Cấu hình
2.x sẽ tự động tải tất cả các tập tin trong thư mục, và trong 3.0 nó sẽ tải các tập tin tương ứng theo chức năng.`src/config/`
#### Hook & Middleware
Loại bỏ các *Hook*  và *Middleware* trong 2.x và thay thế nó bằng middleware trong Koa, nơi quản lý của middleware được đặt trong hồ sơ.`src/config/middleware.js`

Các class middleware dưới 2. x không thể được sử dụng dưới 3,0, và các middleware của Koa có thể được sử dụng trực tiếp dưới 3,0.
#### Controller
Thay đổi class cơ sở và loại bỏ class.`think.controller.basethink.Controllerthink.controller.rest`
#### Model
Thay đổi class cơ sở thành `think.model.basethink.Model`
#### View
Cấu hình của mẫu được di chuyển từ bản gốc đến, và phương pháp cấu hình về cơ bản giống như trước.`src/common/config/view.jssrc/config/config.js`

Phiên bản cũ của phương pháp đã bị bỏ rơi, và phương pháp mới được gọi là. Thứ tự thông số của công cụ mẫu đã được sửa đổi từ bản gốc đến. `preRender()beforeRender()nunjuckspreRender(nunjucks, env, config)beforeRender(env, nunjucks, config)`

#### Block subsequent executions
Xóa stoym phương thức để ngăn chặn việc thực thi tiếp theo, thay thế bằng cách quay lại, để ngăn mã tiếp theo tiếp tục. `think.prevent__beforexxxAction__afterfalse`
#### Error handling
2.x Khi bạn tạo một dự án, tệp error.js tương ứng được tạo để xử lý lỗi. 3.0 thay vào đó sử dụng xử lý theo dõi suy nghĩ trung gian thay thế.
#### Nâng cấp
Bởi vì 3.0 đã thay đổi rất nhiều thứ, không dễ để nâng cấp dựa trên các sửa đổi đơn giản cho mã dự án ban đầu. Bạn nên tạo dự án bằng công cụ giàn giáo mới, sau đó sao chép mã trước đó vào dự án mới để sửa đổi.
## Quá trình chạy
Node.js cung cấp các mô-đun http trực tiếp tạo các dịch vụ [HTTP](https://nodejs.org/api/http.html) để đáp ứng yêu cầu của người dùng, chẳng hạn như các ví dụ về việc tạo các dịch vụ HTTP được cung cấp bởi trang web Node.js:
```js
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```
ThinkJS cũng gọi cách tạo ra dịch vụ, vì vậy toàn bộ quá trình chạy bao gồm hai phần để bắt đầu dịch vụ và đáp ứng yêu cầu của người dùng.`http.createServer`
## Khởi động dịch vụ hệ thống
- Thực hiện `npm start` hoặc `node development.js`
- Instantiate các lớp [ứng dụng](https://github.com/thinkjs/thinkjs/blob/3.0/lib/application.js) trong thinkjs để thực hiện phương pháp.`run`
- Xử lý logic khác nhau tùy thuộc vào môi trường (trình quản lý, quá trình riêng biệt, lệnh gọi dòng)
- Nếu đó là một quá trình Master.
  - Tải hồ sơ, xây dựng và các đối tượng.`think.configthink.logger`
  - Nạp tệp tệp`src/bootstrap/master.js`
  - Nếu hồ sơ lắng nghe dịch vụ, sau đó bắt đầu nghe các thay đổi trong tệp, thư mục được.`src/`
  - Sau khi tệp được sửa đổi, nếu hồ sơ biên dịch vụ, tệp được biên soạn và biên soạn thư mục.`app/`
  - Theo cấu hình để Fork số tương ứng của người lao động. Sự kiện được kích hoạt khi quá trình riêng biệt được khởi  động. (có thể bị bắt bởi)`workersappReadythink.app.on("appReady")`
  - Nếu một sửa đổi mới xảy ra với các tập tin, biên soạn được kích hoạt và tất cả các quá trình riêng biệt bị chết và ngã ba được khởi động lại.
- Nếu đó là một quá trình riêng biệt
  - Tải hồ sơ, xây dựng và các đối tượng.`think.configthink.logger`
  - Tải mở rộng để cung cấp nhiều chức năng hơn cho khuôn khổ, và cấu hình là.`src/config/extend.js`
  - Được một danh sách các mô-đun cho dự án hiện tại, và những nơi chúng trên, và nếu nó là một mô-đun duy nhất, giá trị là một mảng trống.`think.app.modules`
  - Tải tập tin điều khiển () trong dự án và nơi nó trên các đối tượng.`src/controller/*.jsthink.app.controllers`
  - Tải các tập tin logic trong dự án () và nơi nó trên các đối tượng.`src/logic/*.jsthink.app.logics`
  - Tải các tập tin mô hình trong dự án (), và nơi nó trên các đối tượng.`src/model/*.jsthink.app.models`
  - Tải các tập tin dịch vụ () trong dự án và nơi nó trên các đối tượng.`src/service/*.jsthink.app.services`
  - Tải hồ sơ tuyến và nơi nó trên đối tượng.`src/config/router.jsthink.app.routers`
  - Tải hồ sơ kiểm tra và nơi nó trên đối tượng.`src/config/validator.jsthink.app.validators`
  - Tải hồ sơ middleware và đăng ký thông qua phương pháp.`src/config/middleware.jsthink.app.use`
  - Tải hồ sơ công việc hẹn giờ và đăng ký dịch vụ công việc timed.`src/config/crontab.js`
  - Tải tệp khởi động.`src/bootstrap/worker.js`
  - Lắng nghe và các sự kiện lỗi trong quá trình và xử lý chúng. Bạn có thể tùy chỉnh các chức năng xử lý của hai lỗi trong cấu hình.`onUncaughtExceptiononUnhandledRejectionsrc/config.js`
  - Chờ cho chức năng xử lý trước khi bắt đầu đăng ký để thực hiện, nơi bạn có thể đăng ký một số giao dịch Dịch vụ trước.`think.beforeStartServer`
  - Nếu bạn đã tùy chỉnh để tạo một cấu hình dịch vụ, thực hiện chức năng này để tạo ra một dịch vụ.`createServercreateServer(port, host, callback)`
  - Nếu không có tuỳ chỉnh, Dịch vụ được bắt đầu bằng.`think.app.listen`
  - Khi dịch vụ khởi động, sự kiện được kích hoạt và các địa chỉ khác có thể được theo dõi ở nơi khác.`appReadythink.app.on("appReady")`
  - Dịch vụ được tạo ra được gán cho đối tượng.`think.app.server`
Sau khi dịch vụ bắt đầu, các bản ghi sau được in:
```
[2017-07-02 13:36:40.646] [INFO] - Server running at http://127.0.0.1:8360
[2017-07-02 13:36:40.649] [INFO] - ThinkJS version: 3.0.0-beta1
[2017-07-02 13:36:40.649] [INFO] - Enviroment: development #The current environment
[2017-07-02 13:36:40.649] [INFO] - Workers: 8   #Number of child processes
```
## Xử lý yêu cầu người dùng
Khi người dùng yêu cầu một dịch vụ, nó đi qua các bước sau.
- Yêu cầu đến máy chủ web (ví dụ: Nginx) và chuyển tiếp yêu cầu đến dịch vụ nút qua proxy ngược. Nếu bạn truy cập - Dịch vụ nút trực tiếp qua cổng, không có bước như vậy.
- Dịch vụ nút nhận được yêu cầu người dùng và quá trình quản lý chuyển requesttothe quá trình riêng biệt tương ứng.
- Quá trình riêng biệt xử lý yêu cầu người dùng thông qua middleware đăng ký:
  - [Meta](https://github.com/thinkjs/think-meta) xử lý thông tin phổ biến như thiết lập thời gian ra cho yêu cầu, cho dù để gửi số phiên bản thinkjs, cho dù để gửi xử lý, và như vậy.
  - [Tài nguyên](https://github.com/thinkjs/think-resource) quy trình yêu cầu nguồn lực tĩnh, tài nguyên tĩnh được đặt dưới, và nếu yêu cầu hiện tại truy cập là một nguồn lực tĩnh, sau đó các trung gian kết thúc sớm sau khi chế biến và không còn thực hiện các middleware phía sau.`www/static/`
  - [Theo dõi](https://github.com/thinkjs/think-trace) xử lý một số thông báo lỗi, in thông báo lỗi chi tiết trong môi trường phát triển và môi trường sản xuất chỉ báo cáo lỗi chung.
  - [Tải trọng](https://github.com/thinkjs/think-payload) quá trình dữ liệu được tải lên bởi người dùng, bao gồm dữ liệu biểu mẫu, tập tin, và như vậy. Khi độ phân giải hoàn tất, dữ liệu được đặt trên đối tượng để đọc tiếp theo.`request.body`
  - [Router](https://github.com/thinkjs/think-router) giải quyết các tuyến đường, phân tích các điều khiển tương ứng và hành động để xử lý yêu cầu, và những nơi nó trên và cho xử lý tiếp theo. Nếu dự án là một cấu trúc đa mô-đun, cũng có.`ctx.controllerctx.actionctx.module`
  - [Logic](https://github.com/thinkjs/think-logic) gọi phương thức tương ứng trong logic, dựa trên bộ điều khiển và hành động phân tích cú pháp.
    - Instantiate các lớp logic và vượt qua nó trong. Bỏ qua trực tiếp nếu nó không tồn tại`ctx`
    - Thực hiện phương pháp, nếu trở lại, không tiếp theo tất cả logic được thực hiện (kết thúc xử lý sớm)`__beforefalse`
    - Nếu phương pháp tồn tại, thực hiện và kết quả trả về mà không có logic tiếp theo được thực thi`xxxActionfalse`
    - Nếu phương pháp không tồn tại, một nỗ lực được thực hiện để thực hiện phương pháp`xxxAction__call`
    - Thực hiện phương pháp, và nếu trả về, không có logic tiếp theo được thực hiện`__afterfalse`
    - Để ngăn chặn việc thực hiện logic tiếp theo bằng phương pháp trở lại`false`
  - [Bộ điều khiển](https://github.com/thinkjs/think-controller) gọi phương thức tương ứng trong bộ điều khiển, dựa trên bộ điều khiển và hành động phân tích cú pháp.
    - Chính sách gọi cụ thể và logic chính xác cùng một
    - Nếu nó không tồn tại, yêu cầu hiện tại trả về 404
    - Khi thực hiện hành động hoàn tất, bạn có thể để các kết quả trên thuộc tính và trả lại cho người dùng.`this.body`
  - Khi nhân viên báo cáo lỗi, kích hoạt hoặc sự kiện hoặc nhân viên thoát bất thường, chủ bắt lỗi, tái dĩa một quá trình riêng biệt mới và giết quá trình hiện tại.`onUncaughtExceptiononUnhandledRejection`

Như bạn có thể thấy, tất cả người dùng yêu cầu xử lý được thực hiện thông qua middleware. Trong một dự án cụ thể, nhiều middleware có thể được lắp ráp để xử lý yêu cầu người dùng khi cần thiết.
## Config/cấu hình
Trong một dự án thế giới thực, một loạt các cấu hình chắc chắn là cần thiết, bao gồm cả cấu hình yêu cầu của khuôn khổ và cấu hình của dự án tùy biến. ThinkJS quản lý tất cả các cấu hình thống nhất, các tập tin được đặt trong thư mục (Multi-module dự án được đặt) và được chia thành các cấu hình khác nhau tùy thuộc vào chức năng.`src/config/src/common/config/`

- `config.js`Một số cấu hình phổ biến.
- `adapter.js` cấu hình bộ điều hợp.
- `router.js` Cấu hình định tuyến tùy chỉnh.
- `middleware.js` cấu hình middlware.
- `validator.js` Cấu hình kiểm tra dữ liệu.
- `extend.js` mở rộng cấu hình.
### Cấu hình định dạng
```js
// src/config.js

module.exports = {
  port: 1234,
  redis: {
    host: '192.168.1.2',
    port: 2456,
    password: ''
  }
}
```
Giá trị cấu hình có thể là một chuỗi đơn giản hoặc một đối tượng phức tạp, tùy thuộc vào loại dựa trên nhu cầu cụ thể.

### Cấu hình đa môi trường
Một số cấu hình cần đặt giá trị khác nhau trong môi trường khác nhau, chẳng hạn như: cấu hình cơ sở dữ liệu là khác nhau trong môi trường phát triển và môi trường sản xuất, tại thời điểm đó nó có thể được thực hiện bởi các tập tin cấu hình tương ứng trong môi trường.

Định dạng hồ sơ đa môi trường là:`[name].[env].jsconfig.development.jsconfig.production.js`
Trong các cấu hình trên, chỉ và hiện đang hỗ trợ các cấu hình môi trường khác nhau.`config.jsadapter.js`
### Cấu hình mặc định hệ thống
Hệ thống có một số cấu hình mặc định được tích hợp sẵn, giúp dễ sử dụng trực tiếp trong dự án, cụ thể là:
- [Config.js](https://github.com/thinkjs/thinkjs/blob/3.0/lib/config/config.js) Universal cấu hình mặc định
```js
{
  port: 8360, // server port
  // host: '127.0.0.1', // server host, the default config removed from 3.1.0
  workers: 0, // server workers num, if value is 0 then get cpus num
  createServer: undefined, // create server function
  startServerTimeout: 3000, // before start server time
  reloadSignal: 'SIGUSR2', // reload process signal
  stickyCluster: false, // sticky cluster, add from 3.1.0
  onUnhandledRejection: err => think.logger.error(err), // unhandledRejection handle
  onUncaughtException: err => think.logger.error(err), // uncaughtException handle
  processKillTimeout: 10 * 1000, // process kill timeout, default is 10s
  jsonpCallbackField: 'callback', // jsonp callback field
  jsonContentType: 'application/json', // json content type
  errnoField: 'errno', // errno field
  errmsgField: 'errmsg', // errmsg field
  defaultErrno: 1000, // default errno
  validateDefaultErrno: 1001 // validate default errno
};
```



