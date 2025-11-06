function comment(text, style) {
    const lines = text.split('\n');
    
    switch (style) {
      case "Bash":
      case "Python":
        return lines.map(line => `# ${line}`).join('\n');
        
      case "Bash Multiline":
        return `: "\n${text}\n"`;
        
      case "JavaDoc":
        if (lines.length === 1) {
          return `/**\n* ${text}\n*/`;
        } else {
          const content = lines.map(line => `* ${line}`).join('\n');
          return `/**\n${content}\n*/`;
        }
        
      case "Python Multiline":
        return `"""\n${text}\n"""`;
        
      case "Javascript":
        return lines.map(line => `// ${line}`).join('\n');
        
      case "Javascript Multiline":
        return `/*\n${text}\n*/`;
        
      case "SGML":
        return lines.map(line => `<!-- ${line} -->`).join('\n');
        
      case "SQL":
        return lines.map(line => `-- ${line}`).join('\n');
        
      default:
        return text;
    }
  }