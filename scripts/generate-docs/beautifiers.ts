import { Beautifier } from "unibeautify";
import prettyDiff from "@unibeautify/beautifier-prettydiff";
import prettier from "@unibeautify/beautifier-prettier";
import jsBeautify from "@unibeautify/beautifier-js-beautify";
import eslint from "@unibeautify/beautifier-eslint";
import phpCsFixer from "@unibeautify/beautifier-php-cs-fixer";
import clangFormat from "@unibeautify/beautifier-clang-format";
import phpCodesniffer from "@unibeautify/beautifier-php-codesniffer";
import black from "@unibeautify/beautifier-black";

const beautifiers: Beautifier[] = <any[]>[
  prettier,
  jsBeautify,
  prettyDiff,
  eslint,
  phpCsFixer,
  clangFormat,
  phpCodesniffer,
  black,
];

export default beautifiers;
