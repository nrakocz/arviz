(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("1e4dc998-9b2c-4783-bb12-b3b7a4ea11bf");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '1e4dc998-9b2c-4783-bb12-b3b7a4ea11bf' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.3.1.min.js": "YF85VygJKMVnHE+lLv2AM93Vbstr0yo2TbIu5v8se5Rq3UQAUmcuh4aaJwNlpKwa", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.1.min.js": "KKuas3gevv3PvrlkyCMzffFeaMq5we/a2QsP5AUoS3mJ0jmaCL7jirFJN3GoE/lM", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.1.min.js": "MK/uFc3YT18pkvvXRl66tTHjP0/dxoSH2e/eiNMFIguKlun2+WVqaPTWmUy/zvh4"};
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.3.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.1.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"ddc61040-18e6-400c-aa25-8b76e19b229a":{"defs":[],"roots":{"references":[{"attributes":{"axis":{"id":"14172"},"dimension":1,"ticker":null},"id":"14175","type":"Grid"},{"attributes":{},"id":"14207","type":"BasicTickFormatter"},{"attributes":{},"id":"14204","type":"BasicTickFormatter"},{"attributes":{},"id":"14202","type":"AllLabels"},{"attributes":{},"id":"14179","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"14184","type":"BoxAnnotation"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"14207"},"major_label_policy":{"id":"14205"},"ticker":{"id":"14173"}},"id":"14172","type":"LinearAxis"},{"attributes":{"children":[{"id":"14215"},{"id":"14213"}]},"id":"14216","type":"Column"},{"attributes":{"axis":{"id":"14168"},"ticker":null},"id":"14171","type":"Grid"},{"attributes":{"toolbar":{"id":"14214"},"toolbar_location":"above"},"id":"14215","type":"ToolbarBox"},{"attributes":{"overlay":{"id":"14184"}},"id":"14178","type":"BoxZoomTool"},{"attributes":{"text":"centered model - non centered model"},"id":"14199","type":"Title"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"14185","type":"PolyAnnotation"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIkKht05k7+A2X/x9IekPwAArX2oaFM/QNQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"14210"},"selection_policy":{"id":"14211"}},"id":"14196","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"14204"},"major_label_policy":{"id":"14202"},"ticker":{"id":"14169"}},"id":"14168","type":"LinearAxis"},{"attributes":{},"id":"14176","type":"ResetTool"},{"attributes":{},"id":"14160","type":"DataRange1d"},{"attributes":{},"id":"14181","type":"UndoTool"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"value":"cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"14195","type":"Scatter"},{"attributes":{},"id":"14173","type":"BasicTicker"},{"attributes":{},"id":"14162","type":"DataRange1d"},{"attributes":{"source":{"id":"14196"}},"id":"14198","type":"CDSView"},{"attributes":{},"id":"14210","type":"Selection"},{"attributes":{"data_source":{"id":"14196"},"glyph":{"id":"14195"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"14198"}},"id":"14197","type":"GlyphRenderer"},{"attributes":{"active_multi":null,"tools":[{"id":"14176"},{"id":"14177"},{"id":"14178"},{"id":"14179"},{"id":"14180"},{"id":"14181"},{"id":"14182"},{"id":"14183"}]},"id":"14186","type":"Toolbar"},{"attributes":{},"id":"14164","type":"LinearScale"},{"attributes":{},"id":"14205","type":"AllLabels"},{"attributes":{"children":[[{"id":"14159"},0,0]]},"id":"14213","type":"GridBox"},{"attributes":{"callback":null},"id":"14183","type":"HoverTool"},{"attributes":{},"id":"14166","type":"LinearScale"},{"attributes":{},"id":"14211","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"14185"}},"id":"14180","type":"LassoSelectTool"},{"attributes":{"below":[{"id":"14168"}],"center":[{"id":"14171"},{"id":"14175"}],"height":288,"left":[{"id":"14172"}],"output_backend":"webgl","renderers":[{"id":"14197"}],"title":{"id":"14199"},"toolbar":{"id":"14186"},"toolbar_location":null,"width":432,"x_range":{"id":"14160"},"x_scale":{"id":"14164"},"y_range":{"id":"14162"},"y_scale":{"id":"14166"}},"id":"14159","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"14177","type":"PanTool"},{"attributes":{"toolbars":[{"id":"14186"}],"tools":[{"id":"14176"},{"id":"14177"},{"id":"14178"},{"id":"14179"},{"id":"14180"},{"id":"14181"},{"id":"14182"},{"id":"14183"}]},"id":"14214","type":"ProxyToolbar"},{"attributes":{},"id":"14169","type":"BasicTicker"},{"attributes":{},"id":"14182","type":"SaveTool"}],"root_ids":["14216"]},"title":"Bokeh Application","version":"2.3.1"}}';
                  var render_items = [{"docid":"ddc61040-18e6-400c-aa25-8b76e19b229a","root_ids":["14216"],"roots":{"14216":"1e4dc998-9b2c-4783-bb12-b3b7a4ea11bf"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();