module.exports = function (grunt) {

  require("load-grunt-tasks")(grunt);
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask("build", [
	"clean",
	"copy",
	"less",
	"autoprefixer",
    "cmq",
	"concat",
//  "csscomb",
//  "cssmin",
//	"uglify",
//	"critical",
//	"imagemin"
	]);

  
  
// Watch task - autorun all uncoment tasks when .less files are changed  
  
  
  
  grunt.initConfig({
    watch: {
      scripts: {
        files: '**/*.less',
        tasks: ['build'],
        options: {
          debounceDelay: 0,
        },
      },
    },
    
    
    
// Cleaning build directory    
    
    
    
    clean: {
      build: ["build"]
    },

    copy: {
      build: {
        files: [{
            expand: true,
            cwd: "source",
            src: ["img/**", "js/**", "fonts/**", "index.html", "footer.html", "cleats-filter.html", "clubs-filter.html","settings.html","text.html","sizes.html","catalog-filter.html","services.html","contacts.html","item.html","product.html","product-properties.html","wishlist.html","hats-filter.html","underwear-filter.html","cart.html","cart--signed-out.html","catalog-page.html","check-out.html"],
            dest: "build"
			},
          {
            expand: true,
            src: ["css/**"],
            dest: "build"
			},
          {
            expand: true,
            src: ["bower_components/**"],
            dest: "build/js"
			}]

      }

    },
    
    
    
// Make CSS/LESS beautiful, file for config ".csscomb.json"    
    
    
    
    csscomb: {
      style: {
        expand: true,
        src: ["build/css/**/*.css"]
      }
    },
    
    
    
 // Compile LESS files
    
    
    
    less: {
      style: {
        files: {
          "build/css/style.css": ["source/less/style.less"]
        }
      }
    },
    
    
    
// Autoprefix CSS, browsers: ["popularity" (req), "specified versions" (opt), "name of the specific browser" (opt)]
    
    
    
    autoprefixer: {
      options: {
        browsers: ["> 0.1%", "last 3 version", "ie 10"]
      },
      style: {
        src: "build/css/style.css"
      }
    },
    
    
    
// Selection critical css-properties for first screen and put them in the <style> between <head> </head>
    
    
    
    critical: {
      test: {
        options: {
          base: './',
          css: [
						'build/css/style.css'
					],
          width: 1300,
          height: 900
        },
        src: 'build/index.html',
        dest: 'build/index-critical.html'
      }
    },
    
    
    
// Combine media queries
    
    
    
    cmq: {
      style: {
        files: {
          "build/css/style.css": ["build/css/style.css"]
        }
      }
    },
    
    
    
// Minify CSS
  
    
    
    cssmin: {
      style: {
        options: {
          keepSpecialComments: 0,
          report: "gzip"
        },
        files: {
          "build/css/style.min.css": ["build/css/style.css"],
          "build/css/normalize.css": ["build/css/normalize.css"]
        }
      }
    },
    
    
    
// Concat CSS/JS files    
    
    
    
    concat: {
      styles: {
        src: ['build/css/style.css', './css/animate.css'],
        dest: 'build/css/style.css',
      },
      //		scripts: {
      //			src: ['build/js/script.js', 'build/js/tap.js', 'build/js/wow.js'],
      //			dest: 'build/js/script.js',
      //		},
    },
    
    
    
// Optimize images    
    
    
    
    imagemin: {
      images: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          src: ["build/img/**/*.{png,jpg,gif,svg}"]
				}]
      }
    },
    
    
    
// Minify JS
    
    
    
    uglify: {
      my_target: {
        files: {
          'build/js/script.min.js': ['build/js/script.js']
        }
      }
    },
  });
};