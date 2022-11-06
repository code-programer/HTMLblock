# HTMLblock
## What is HTMLblock
HTMLblock is a project to let you create custom HTML bloks
## How to use it
Just add `<script src="https://htmlblock.vercel.app/block.js"></script>` in your document, and start creating!
## Template
`new HTMLblock(tagName, function).onload()`
## Example
`new HTMLblock("alert","alert").onload()`
This example makes that if you put `<alert>Hello</alert>` in you document, the element will not show, but it will send an alert telling hello.
the `.onload()` makes that the document runs all the <alert></alert> boxes that it can find.
