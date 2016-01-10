module.exports = function(grunt) {
    grunt.initConfig({
        concurrent: {
            dev: ["typescript", "nodemon", "watch"],
            options: {
                logConcurrentOutput: true
            }
        },
        typescript: {
            base: {
                src: ["src/**/*.ts"],
                dest: "build",
                options: {
                    module: "commonjs",
                    target: "es5",
                    basePath: "src",
                    sourceMap: true,
                    declaration: true
                }
            }
        },
        nodemon: {
            dev: {
                script: 'build/app.js'
            }
        },
        watch: {
            js: {
                files: ["src/**/*.ts"],
                tasks: ['typescript'],
                options: { nospawn: true, livereload: true }
            }
        }
    });

    grunt.loadNpmTasks("grunt-nodemon");
    grunt.loadNpmTasks("grunt-concurrent");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-typescript');

    grunt.registerTask("run", ["concurrent:dev"]);
    grunt.registerTask("default", ["concurrent:dev"]);
}
