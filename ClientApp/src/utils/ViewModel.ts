import { GeneratedFile } from '@/models/GeneratedFile';
import { Project } from '@/models/Project';
import { CRC32 } from 'crc_32_ts';
import { UndoStack } from './UndoStack';

export class ViewModel {
    generatedFiles = Array<GeneratedFile>();
    previousFiles = Array<GeneratedFile>();
    undoStack = new UndoStack();
    crc32ProjectName = CRC32.str('My Project');
    crc32Saved = 0;
    activeProject: Project = {id: -1, ownerId: -1, name: 'My Project', json: '', backend: 'ASP.NET', frontend: 'Vue 2 + JS'};
    newProjectDialog = false;
    activeFile: GeneratedFile = {name: '', path: '', content: ''};
    jsonErrors = Array<{line: number; color: string}>();
    backend = 'ASP.NET';
    frontend = 'Vue 2 + JS';
    generateLoading = false;
    isCompare = true;
    showChanges = true;
    highlightedDifferences: Array<{line: number; color: string}> = [];
    downLoading = false;
    projectSettings = false;
    snackbar = {
        dismissible: true,
        visible: false,
        type: '',
        icon: 'mdi-alert-circle',
        text: '',
        timeout: 5000,
    }
    public get isPristine(): boolean {
        const top = this.undoStack.top();
        if(top){
            if((top.crc32 === CRC32.str(this.activeProject.json)) &&
                (this.crc32ProjectName === CRC32.str(this.activeProject.name)) &&
                (this.backend === this.activeProject.backend) &&
                (this.frontend === this.activeProject.frontend)
            ){
                return true;
            }
        }
        return false;
    }
    public get isJsonPristine(): boolean {
        const top = this.undoStack.top();
        if(top){
            if(top.crc32 === CRC32.str(this.activeProject.json)){
            return true;
            }
        }
        return false;
    }
    public get crc32ForSaving(): number {
      return CRC32.str(this.activeProject.name + this.activeProject.json);
    }
    public get saveDisabled(): boolean {
        return this.crc32Saved === this.crc32ForSaving;
    }
}