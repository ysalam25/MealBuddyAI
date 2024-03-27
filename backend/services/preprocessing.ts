import { exec } from 'child_process';

export class PreprocessingService {
    private pythonExecutable = 'python3';

    public async runPythonPreprocessingScript(scriptPath: string, args: string[]): Promise<void> {
        const command = `${this.pythonExecutable} ${scriptPath} ${args.join(' ')}`;

        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
            console.error(`stderr: ${stderr}`);
        });
    }
}