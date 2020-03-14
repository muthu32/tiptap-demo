
import {
    EditorState,
    Plugin,
    PluginKey,
    TextSelection,
    NodeSelection
  } from 'prosemirror-state'
  import { EditorView,DecorationSet, Decoration } from 'prosemirror-view'
  import { Schema, DOMParser, Node, DOMSerializer, Slice, Fragment } from 'prosemirror-model'
  import { dropCursor } from 'prosemirror-dropcursor'
  import { gapCursor } from 'prosemirror-gapcursor'
  import { keymap } from 'prosemirror-keymap'
  import { inputRules,InputRule, undoInputRule,wrappingInputRule,
    textblockTypeInputRule } from 'prosemirror-inputrules'
  import {
    chainCommands,
    deleteSelection,
    joinBackward,
    selectNodeBackward,
    joinForward,
    selectNodeForward,
    joinUp,
    joinDown,
    lift,
    newlineInCode,
    exitCode,
    createParagraphNear,
    liftEmptyBlock,
    splitBlock,
    splitBlockKeepMarks,
    selectParentNode,
    selectAll,
    wrapIn,
    setBlockType,
    toggleMark,
    autoJoin,
    baseKeymap,
    pcBaseKeymap,
    macBaseKeymap,
  } from 'prosemirror-commands'
  import {
    addListNodes,
    wrapInList,
    splitListItem,
    liftListItem,
    sinkListItem,
  } from 'prosemirror-schema-list'
import { findParentNode,findBlockNodes,createTable,findSelectedNodeOfType } from 'prosemirror-utils'
import { Step } from 'prosemirror-transform'
import {
  collab,
  sendableSteps,
  getVersion,
  receiveTransaction,
} from 'prosemirror-collab'
import { history, undo, redo } from 'prosemirror-history'
import {
    tableEditing,
    columnResizing,
    goToNextCell,
    addColumnBefore,
    addColumnAfter,
    deleteColumn,
    addRowBefore,
    addRowAfter,
    deleteRow,
    deleteTable,
    mergeCells,
    splitCell,
    toggleHeaderColumn,
    toggleHeaderRow,
    toggleHeaderCell,
    setCellAttr,
    fixTables,
    tableNodes
  } from 'prosemirror-tables';


  const prosemirrorState = {
    EditorState,
    Plugin,
    PluginKey,
    TextSelection,
    NodeSelection
  };

  const prosemirrorView = { EditorView,DecorationSet, Decoration };

  const prosemirrorModel = { Schema, DOMParser, Node, DOMSerializer, Slice, Fragment };

  const prosemirrorDropcursor = { dropCursor };

  const prosemirrorGapcursor = { gapCursor };
  const prosemirrorKeymap = { keymap };
  const prosemirrorCommands = {
    chainCommands,
    deleteSelection,
    joinBackward,
    selectNodeBackward,
    joinForward,
    selectNodeForward,
    joinUp,
    joinDown,
    lift,
    newlineInCode,
    exitCode,
    createParagraphNear,
    liftEmptyBlock,
    splitBlock,
    splitBlockKeepMarks,
    selectParentNode,
    selectAll,
    wrapIn,
    setBlockType,
    toggleMark,
    autoJoin,
    baseKeymap,
    pcBaseKeymap,
    macBaseKeymap,
  };

  const prosemirrorInputrules = { InputRule,inputRules, undoInputRule,wrappingInputRule,
    textblockTypeInputRule };

  const prosemirrorUtils = { findParentNode,findBlockNodes,createTable,findSelectedNodeOfType };
  const prosemirrorTables = {
    tableEditing,
    columnResizing,
    goToNextCell,
    addColumnBefore,
    addColumnAfter,
    deleteColumn,
    addRowBefore,
    addRowAfter,
    deleteRow,
    deleteTable,
    mergeCells,
    splitCell,
    toggleHeaderColumn,
    toggleHeaderRow,
    toggleHeaderCell,
    setCellAttr,
    fixTables,
    tableNodes
  };
  const prosemirrorTransform = { Step };
  
  const prosemirrorCollab = {
    collab,
    sendableSteps,
    getVersion,
    receiveTransaction,
  };
  const prosemirrorHistory = { history, undo, redo };

  const prosemirrorSchemaList = {
    addListNodes,
    wrapInList,
    splitListItem,
    liftListItem,
    sinkListItem,
  };

  export {prosemirrorState, prosemirrorView, prosemirrorModel, prosemirrorDropcursor, prosemirrorGapcursor, prosemirrorKeymap, prosemirrorCommands, prosemirrorInputrules,
  prosemirrorUtils, prosemirrorTables, prosemirrorTransform, prosemirrorCollab, prosemirrorHistory,prosemirrorSchemaList};
