function loadJSON(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open("GET", "loot_table.json", false);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

function main() {
  var loot_table_schema = {};

  loadJSON(function (response) {
    loot_table_schema = JSON.parse(response);
  });
  
  var editor = new JSONEditor(document.getElementById("editor_holder"), {
    theme: "bootstrap4",
    iconlib: "fontawesome5",
    prompt_before_delete: false,
    disable_array_delete_all_rows: true,
    disable_array_delete_last_row: true,
    ajax: true,
    keep_oneof_values: false,
    remove_empty_properties: true,
    disable_array_reorder: true,
    disable_collapse: true,
    disable_properties: true,
    remove_button_labels: true,
    disable_edit_json: true,
    no_additional_properties: true,
    schema: loot_table_schema,
  });

  editor.on("ready", function () {


    var buttonRow = document.getElementsByClassName("je-object__controls")[0];
    var insert = document.createElement('div');
    insert.innerHTML = '<button type="button" title="Save Result As File" class="custom-button btn btn-secondary btn-sm json-editor-btn-save"><i class="fas fa-save"></i><span> Save Result As File</span></button>';
    
    buttonRow.appendChild(insert);

    insert.addEventListener(
      "click",
      function (e) {
        e.preventDefault();
        var example = editor.getValue(),
          filename = "example.json",
          blob = new Blob([JSON.stringify(example, null, 2)], {
            type: "application/json;charset=utf-8",
          });

        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveOrOpenBlob(blob, filename);
        } else {
          var a = document.createElement("a");
          a.download = filename;
          a.href = URL.createObjectURL(blob);
          a.dataset.downloadurl = ["text/plain", a.download, a.href].join(":");

          a.dispatchEvent(
            new MouseEvent("click", {
              view: window,
              bubbles: true,
              cancelable: false,
            })
          );
        }
      },
      false
    );
  });
}

main();
