console.info(
    'Jax: v1.1 | Jax Engine was initialised.'
)

var tab = "	",
    compiled = ``,
    compiled_array = [],
    style = '',
    style_started = false;
async function Jax(jax = '') {
    jax.split('\n').forEach((_, idx) => {
        var DOM = '',
            line = _,
            spaces = 0,
            line_has_no_closing_tag = !!"";

        // Remove all useless spaces
        while (line.endsWith(" ")) {
            line = line.substring(0, line.length - 1)
        }

        if (line.endsWith(';')) {
            line_has_no_closing_tag = true
            line = line.substring(0, line.length - 1)
        }

        while (line.startsWith(tab)) {
            spaces++;
            line = line.substring(1, line.length);
        }
        if (style_started) {
            style += '\n' + _
            return;
        } else if (!line.startsWith('*')) { // Bypass comments (lines that starts with '*').
            var char = line.split('');
            var class_id_attribute_started = !!"";
            var classes = '',
                ids = '',
                attributes = '',
                inside = '';
            var currently_recording_type = '';
            char.forEach(c => {
                if (c === "$") {
                    class_id_attribute_started = !"";
                    currently_recording_type = "$"
                    if (!attributes.endsWith(" ") && attributes !== "") {
                        attributes += " ";
                    }
                } else if (c === "#") {
                    class_id_attribute_started = !"";
                    currently_recording_type = "#"
                    if (!ids.endsWith(" ") && ids !== "") {
                        ids += " ";
                    }
                } else if (c === ":") {
                    class_id_attribute_started = !"";
                    currently_recording_type = ":"
                    if (!inside.endsWith(" ") && inside !== "") {
                        inside += " ";
                    }
                } else if (c === ".") {
                    class_id_attribute_started = !"";
                    currently_recording_type = "."
                    if (!classes.endsWith(" ") && classes !== "") {
                        classes += " ";
                    }
                } else {
                    if (!class_id_attribute_started) {
                        DOM += c;
                    } else {
                        switch (currently_recording_type) {
                            case "$":
                                attributes += c;
                                break;
                            case "#":
                                ids += c;
                                break;
                            case ".":
                                classes += c;
                                break;
                            case ":":
                                inside += c;
                                break;
                        }
                    }
                }
            })
        }

        DOM = DOM.replace(/ /g, '')
        if (DOM === 'style') {
            return style_started = true;
        }
        DOM !== "" ? (() => {
            var html_ready = [...Jax.MakeTag(DOM, classes, ids, attributes, inside, !line_has_no_closing_tag), spaces];
            compiled_array = [...compiled_array, html_ready];
        })() : () => {

        }
    })

    var cursor = 0
    var crédit = []
    var index = -1
    var crédit_last
    var crédit_in_int = 0
    compiled_array.forEach((structure, structure_index) => {
        index++;
        var struct = new Object();
        struct.first_tag = structure[0], struct.second_tag = structure[1], struct.spaces = structure[2];
        crédit_last = struct.second_tag;
        struct.spaces = parseInt(struct.spaces);
        if (index === compiled_array.length - 1) {
            var how_much_tag_to_close = crédit.length - parseInt(struct.spaces);
            for (how_much_tag_to_close; how_much_tag_to_close >= 0; how_much_tag_to_close--) {
                compiled += (crédit[how_much_tag_to_close]) !== undefined ? crédit[how_much_tag_to_close] : "";
                crédit.pop();
            }
            compiled += struct.first_tag + struct.second_tag;
        } else
        if (struct.spaces === cursor) { // IF[LINE is in the bottom of another line]

            // Close Last Tag
            compiled += (crédit[crédit.length - 1]) !== undefined ? crédit[crédit.length - 1] : "";
            crédit.pop();

            // Add new Tag
            compiled += struct.first_tag;
            crédit.push(struct.second_tag);

        } else if (struct.spaces < cursor) { // IF[Finally wrote the last LINE]
            cursor--;

            // Close last Tags
            var how_much_tag_to_close = crédit.length - parseInt(struct.spaces)
            for (how_much_tag_to_close; how_much_tag_to_close >= 0; how_much_tag_to_close--) {
                compiled += (crédit[how_much_tag_to_close]) !== undefined ? crédit[how_much_tag_to_close] : "";
                crédit.pop();
            }

            // Add new Tag
            compiled += struct.first_tag;
            crédit.push(struct.second_tag);

        } else if (struct.spaces > cursor) {
            cursor++;
            crédit_in_int++;
            compiled += struct.first_tag;
            crédit.push(struct.second_tag);
        }
    })
    if (crédit !== []) {
        crédit.forEach(credit_left => {
            compiled += credit_left;
        })
    }

    // Add recorded style
    style === '' ? () => {} : (() => {
        compiled += `<style>${style}</style>`
    })();


    print(compiled);

    compiled_array = [], compiled = '', crédit = [] // Reset The Main Variables In End! //
}

/// Jax Child-Functions ///

Jax.init = function configuration(config) { // Coming soon...
    if (typeof config !== 'object') {
        return Jax.Console.Error("TypeError: Typeof Param[0](config) used in 'Jax.init' is not an Object.")
    }
    if (config.logSystemErrors && config.logSystemErrors === true) {
        // Change variable (log_system_errors) to 'true'.
    }
}

Jax.MakeTag = function(DOM = '', classes = '', ids = '', attributes = '', inside = '', close_tag = true) {
    while (classes.startsWith(' ')) {
        classes = classes.removeBlank()
    }
    var html = []
    var tag_primary = `<${DOM}${classes!==''?(' class="' + classes + '"'):''}${ids!==''?(' id="' + ids + '"'):''}${attributes!==''?" "+attributes:''}>${inside}`;
    var tag_secondary = close_tag ? `</${DOM}>` : "";
    html.push(tag_primary)
    html.push(tag_secondary)
    return html
}


Jax.Console = new Object()

Jax.Console.Error = (string) => {
    console.log('%cJax Info:', "color:indigo;font-size:25px;")
    console.log(`%c${string}`, "color:red;font-size:15px;")
}


function print(s = '') {
    return console.log(s)
}

String.prototype.removeBlank = () => {
    var string = this
    while (string.startsWith(" ")) {
        string = string.substring(1, string.length);
    }
    while (string.endsWith(" ")) {
        string = string.substring(0, string.length - 1);
    }
    return string
}
