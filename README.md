## Highlightable

Highlightable is a jQuery plugin for making text highlightable.

### Demo

./demo.htm

### Usage

You can use highlightable like this

    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at massa non erat convallis vulputate molestie nec dui. Donec auctor blandit nibh quis luctus. Donec tincidunt auctor consequat.
    </p>

    <script>
    $(function(){
        $('p').highlightable();
    });
    </script>

highlightable.js will wrap words within selected area in spans like e.g.

    <p>
    ...
    <span class="js-highlightable">Lorem</span>
    <span class="js-highlightable">ipsum</span>
    <span class="js-highlightable">dolor</span>
    ...
    </p>

When hover over any word, it will appear highlighted.

When click on any word, it will be highlighted.

### Todos

- Click a word, highlight all the same words in the text.
- Options to control the highlight style.
- Tests.

### Similar Projects

<http://johannburkard.de/blog/programming/javascript/highlight-javascript-text-higlighting-jquery-plugin.html>
<http://bartaz.github.io/sandbox.js/jquery.highlight.html>


### License

Copyright 2013 Sun Liwen.

Released under the MIT license.