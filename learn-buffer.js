//1、Buffer.alloc创建了一个长度为 10 字节的 Buffer，相当于申请了 10 字节的内存空间，会做清零操作
const buf_1 = Buffer.alloc(10);
console.log('shen log: ', { buf_1 });
// 2、Buffer.allocUnsafe创建了一个长度为 10 字节的 Buffer，相当于申请了 10 字节的内存空间，不会做清零操作
const buf_2 = Buffer.allocUnsafe(10);
console.log('shen log: ', { buf_2 });

// 3、Buffer.from
// 通过字符串创建，分别将每个字符对应的unicode存进内存中
const buf_3 = Buffer.from('hello');
console.log('shen log: ', { buf_3 });
// 通过字符串创建，分别将每一位对应的unicode存进内存中
const buf_4 = Buffer.from([105, 108, 2]);
console.log('shen log: ', { buf_4 });

// 转换成字符串
console.log(buf_3.toString());


//修改
buf_3[1] = '1';
//查看字符串结果
console.log(buf_3.toString());
