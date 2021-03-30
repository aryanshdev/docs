(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{398:function(s,t,n){"use strict";n.r(t);var a=n(45),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"quick-start-with-cli"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#quick-start-with-cli"}},[s._v("#")]),s._v(" Quick Start with CLI")]),s._v(" "),n("p",[s._v("Count API CLI is a standalone tool which enables you to count up/down, get counter information or list history of the\ncounter.")]),s._v(" "),n("br"),s._v("\nIt does not require authentication or login.\n"),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("CLI "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" to counter things\n\nUsage:\n  counter "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("command"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nAvailable Commands:\n  counts      Fetches counts of counter\n  down        Count down "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" given name\n  get         Fetches counter information\n  "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v("        Help about any "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v("         Sets counter\n  up          Count up "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" given name\n  version     Print the version/build number\n\nFlags:\n  -h, --help   "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" counter\n\nUse "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"counter [command] --help"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" information about a command.\n")])])]),n("h2",{attrs:{id:"count-up"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#count-up"}},[s._v("#")]),s._v(" Count Up")]),s._v(" "),n("p",[s._v("You can count up with given name. The name of the counter is unique. Do not forget that anyone with same name can count\nup or down.")]),s._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("❯ counter up --name MyCounter01                  \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"id"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(",\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MyCounter01"')]),s._v(",\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"count"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(",\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"created_at"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2021-03-28T21:19:09.450461117Z"')]),s._v(",\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"updated_at"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2021-03-28T21:19:09.466029457Z"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),n("h2",{attrs:{id:"count-down"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#count-down"}},[s._v("#")]),s._v(" Count Down")]),s._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("❯ counter down --name MyCounter01\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"id"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MyCounter01"')]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"count"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"created_at"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2021-03-28T21:19:09.450461117Z"')]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"updated_at"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2021-03-28T21:19:09.466029457Z"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),n("h2",{attrs:{id:"set-count"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#set-count"}},[s._v("#")]),s._v(" Set Count")]),s._v(" "),n("p",[s._v("You can set your counter to with "),n("code",[s._v("set")]),s._v(" function.")]),s._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("❯ counter "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" --name MyCounter01 --count "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"id"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MyCounter01"')]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"count"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"created_at"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2021-03-28T21:19:09.450461117Z"')]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"updated_at"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2021-03-28T21:19:09.466029457Z"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),n("h2",{attrs:{id:"get-counter"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#get-counter"}},[s._v("#")]),s._v(" Get Counter")]),s._v(" "),n("p",[s._v("After counting up/down, you can get the final status of your counter with "),n("code",[s._v("get")]),s._v(" function.")]),s._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("❯ counter get --name MyCounter01\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"id"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MyCounter01"')]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"count"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"created_at"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2021-03-28T21:19:09.450461117Z"')]),s._v(",\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"updated_at"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2021-03-28T21:19:09.466029457Z"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);