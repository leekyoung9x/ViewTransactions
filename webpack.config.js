const HtmlWebpackPlugin = require('html-webpack-plugin'); // Thêm dòng này
const path = require('path');

module.exports = {
    entry: './server.js', // Đường dẫn đến tệp nguồn chính của ứng dụng
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'), // Đường dẫn đến thư mục đầu ra build
    },
    resolve: {
        fallback: {
            "url": require.resolve("url/"),
            "path": require.resolve("path-browserify"),
            "util": require.resolve("util/"),
            "stream": require.resolve("stream-browserify"),
            "buffer": require.resolve("buffer/"),
            "string_decoder": require.resolve("string_decoder/"),
            "querystring": require.resolve("querystring/"),
            "http": require.resolve("stream-http"),
            "crypto": require.resolve("crypto-browserify"),
            "zlib": require.resolve("browserify-zlib"),
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html', // Thay đổi đường dẫn tùy thuộc vào cấu trúc của dự án bạn
        }),
    ],
    target: 'node',
};