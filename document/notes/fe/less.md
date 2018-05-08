# less文档

## 1.变量
```less
@width:120px;
```

## 2.混合
```less
.test{
    width:12px;
}
.ant{
    height:24px
    .test;
}
```

```less
.test(@w:20px){
    width:@w;
}
.ant{
    height:24px
    .test(30px);
}
```

## 3.匹配模式
```less
.test(s,@w:20px){
    width:@w;
    height:20px
}
.test(m,@w:20px){
    width:@w;
    height:40px
}
.test(l,@w:20px){
    width:@w;
    height:80px
}
.test(@_,@w:20px){
    width:@w;
    height:45px
}
.ant{
    .test(m,30px);//30,40
    .test(s,30px);//30,20
    .test(mdasd,30px);//30,45
}
```

