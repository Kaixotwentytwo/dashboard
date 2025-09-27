'use strict';

// list of all usable ids of blocks
let ids = [];

class Block {
    constructor(options = {}) {
        // default values
        const defaults = {
            uniqueId: -1,
            gridRows: 1,
            gridColumns: 1,
            blockBackGroundColor: "rgba(93, 93, 93, 0.4)",
            
            // chart variables
            localURL: "",
            localCodeName: "",
            strokes: 0,
            tableName: "table"
        };
        
        // Объединяем defaults с переданными options
        const settings = { ...defaults, ...options };

        this.uniqueId = settings.uniqueId;
        this.gridRows = settings.gridRows;
        this.gridColumns = settings.gridColumns;
        this.localURL = settings.localURL;
        this.localCodeName = settings.localCodeName;
        this.strokes = settings.strokes;
        this.tableName = settings.tableName;
    }
    
    // opens adding block panel
    addNewBlockProccess() {
        
    }
    
    // adds block to DOM
    createBlock() {
        
    }
    
    // removes block from DOM
    deleteBlock() {
        if (window.confirm("Вы уверены, что хотите удалить этот блок?")) {
            console.info("deleting"+this.uniqueId);
        }
    }
    
    // checks if block by some id is this current block
    checkID(id) {
        if (this.uniqueId == id) {
            return true;
        }
    }
}


class ElementManager {
    constructor() {
        
    }
    
    // adds block to DOM
    createBlock(id) {
        const block = new Block();
        
        if (id == null || id == '' || id == false || id <= 0) {
            
        } else {
            
        }
    }
    
    // removes block from DOM
    deleteBlock(id) {
        if (window.confirm("Вы уверены, что хотите удалить этот блок?")) {
                console.info("deleting");
                if (id == null || id == '' || id == false || id <= 0) {
                    // delete block that up to 2 levels higher in a DOM, than a button

                } else {
                    // delete block with current id
                }
        }
    }
}

const manager = new ElementManager();