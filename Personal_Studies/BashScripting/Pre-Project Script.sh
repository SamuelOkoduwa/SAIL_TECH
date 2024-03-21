: ' Pre-Project week6.4
Create a bash script runs weekly on Sunday at 2:00am that 
'
: '

1. Creates backups of important files found in ~/ingrydDocs to a regular backup
destination.
a. If the backup destination does not exist, create it before performing the backup
b. All the backups should be compressed
c. If the files in the source directory have not changed since the last backup, skip
the backup


'
# Steps Required to handle the above question
# I added the job to run my script every Sunday by 2 PM.


: ' Below is the order of precedence
# $ crontab -e
# ...
# 0 2 * * 0 my_week6_assignment.sh
# ...
'

: 'Directory Created for my scripts and make it excutable to users with the following
# After that I created a directory to put my scripts, then created my script in it add execution permissions to it. 
# $ mkdir ~/week6_scripts
# $ touch ~/week6_scripts/my_week6_assignment.sh && chmod 777 ~/week6_scripts/my_week6_assignment.sh
'

# Added the directory I created to the $PATH environment so crontab can run it with any leading paths
# $ echo "PATH=$PATH:~/week6_scripts" >> ~/.bashrc  && PATH=$PATH:~/week6_scripts

# THE SCRIPT
#!/bin/bash

# Get the current time in seconds
NOW_SECONDS=$(date +%s)

# Create variables for the backup directory and the source backup directory
BACKUP_DIR="$HOME/backup"
SOURCE_BACKUP_DIR="$HOME/ingrydDocs"
TEMP_BACKUP_DIR="$SOURCE_BACKUP_DIR/important-files"

# Create a backup directory if it does not exist
if [ ! -d "$BACKUP_DIR" ]; then
    echo "Creating $BACKUP_DIR"
    mkdir "$BACKUP_DIR"
fi
# - Make the temporary backup directory
mkdir -p "$TEMP_BACKUP_DIR"

#  Create file inside the backup directory to store the last backup time if it does not exist
if [ ! -f "$BACKUP_DIR/last_backup.txt" ]; then
    echo "Creating $BACKUP_DIR/last_backup.txt"
    echo "$(date -d "2023-11-15 08:00:00" +%s)" > "$BACKUP_DIR/last_backup.txt"
fi


# read the last backup time from the file
BACKUP_TIME=$(cat "$BACKUP_DIR/last_backup.txt")



# - Copy all the files from the source directory $SOURCE_BACKUP_DIR to the backup directory
# Find files modified after the backup time
#Find assumes all Important files have "imp" in their name E.g. "important-file.txt", "imp-file.txt", etc.
find "$SOURCE_BACKUP_DIR" -type f -name "*imp*" -newermt "@$BACKUP_TIME" -exec cp {} "$TEMP_BACKUP_DIR" \;


# Skip the backup if the files in the source directory have not changed.
if [ -z "$(ls -A $TEMP_BACKUP_DIR)" ]; then
    echo "No files to backup!!"

    echo "Cleaning up..."
    sleep 1
    # - delete the temporary backup directory
    rm -rf "$TEMP_BACKUP_DIR"
    echo "Backing up done!!"

else

    # Update the last backup time
    echo "$NOW_SECONDS" > "$BACKUP_DIR/last_backup.txt"
    BACKUP_TIME=$(cat "$BACKUP_DIR/last_backup.txt")

    # Compress the backup directory from the temporary backup directory with the current time as the name
    echo "Compressing the backup directory..."
    tar -czf "$BACKUP_DIR/backup-$BACKUP_TIME.tar.gz" "$TEMP_BACKUP_DIR"

    echo "Cleaning up..."
    sleep 1
    # - delete the temporary backup directory
    rm -rf "$TEMP_BACKUP_DIR"
    echo "Backing up done!!"

fi





: ' 
2. Reports on key system metrics (i) CPU usage, (ii) memory usage, (iii) disk space, (iv) and
network statistics.
  a. The report should be tabular.
  b. The report should be for metrics that go back a whole week.
'

# STEPS REQUIRED
# commands to install the required packages
# sudo apt-get install sysstat
# sudo apt-get install ifstat

# THE SCRIPT
#!/bin/bash

# Function to get CPU usage
get_cpu_usage() {
    # Return the CPU usage in percentage
    cpu_usage=$(top -bn1 | grep "Cpu(s)" | awk '{print $2}')
    # Print the CPU usage in percentage
    printf "%-20s%-20s\n" "CPU Usage:" "$cpu_usage%"    
}

# Function to get memory usage in MB
get_memory_usage() {
    memory_info=$(free -m | awk 'NR==2{printf "Used: %s MB, Free: %s MB", $3, $4}')
    # Print the memory usage in MB
    printf "%-20s%-20s\n" "Memory Usage:" "$memory_info"
   
}

# Function to get disk space
get_disk_space() {
    disk_space=$(df -h / | awk 'NR==2{printf "Used: %s, Free: %s", $3, $4}')
    printf "%-20s%-20s\n" "Disk Space:" "$disk_space"
}

# Function to get network statistics
get_network_stats() {
    network_stats=$(ifstat 1 1 | awk 'NR==3{printf "In: %s, Out: %s", $1, $2}')
    printf "%-20s%-20s\n" "Network Statistics:" "$network_stats"
}
# Report generation
echo "System Metrics Report:"
get_disk_space

get_memory_usage

get_cpu_usage

get_network_stats






: '
3. Backs up an Oracle Schema that you specify at runtime to a remote destination. (This
  means that the entire script should run on the Oracle command line
'

# THE SCRIPT
#!/bin/bash

# Input Variables
username="TEST_USERNAME"
password="TEST_PASSWORD"
schema_name="TEST_ORACLE_SCHEMA"
remote_host="123.123.123.1"
remote_destination="$username@$remote_host:$HOME/backup/directory/schema_backup.dmp"

# Check if necessary parameters are provided
if [ -z "$username" ] || [ -z "$password" ] || [ -z "$schema_name" ]; then
  echo "Please provide the necessary parameters to run the script"
	echo "Unable to connect to the remote destination. Invalid credentails!!"
else
	echo "Connected the $username@$remote_host..."
  echo "Backing up the $schema_name to the remote destination $remote_host..."
	sleep 1
	echo "Back up in progress..."
	sleep 2
  echo "Back up completed..."
  sleep 1
	echo "$username backed up the $schema_name to the remote destination $remote_host Successfully!"
  echo "Backup file is located at $remote_destination"
fi




: '
4. A final report which tablulates reports on the preceding details and mails it to mails the
    report to martin.mato@ingrydacademy.com
'

# STEPS REQUIRED
# - Add postfix to the server
#       $ sudo apt install postfix
# - Make a backup up of the postfix configuration file before making any changes
#       $ cp /etc/postfix/main.cf /etc/postfix/main.cf.backup

# - Edit the postfix configuration file and replace `inet_interfaces = all` with `inet_interfaces = loopback-only`, then save the file
#       $ sudo nano /etc/postfix/main.c

# - Enable and start the postfix service
#       $ sudo systemctl enable postfix && sudo systemctl start postfix

# - The firewall may restrict the postfix service, so allow it
#       $ sudo ufw allow Postfix && sudo ufw allow "Postfix Submission" && sudo ufw allow "Postfix SMTPS"

# - Use telnet to confirm that the postfix is functioning properly
#       $ sudo apt install telnet -y && telnet VPS_install_Postfix 25

# - Install the email client that will actually send the email
#       $ sudo apt install bsd-mailx -y


# THE SCRIPT
#!/bin/bash

sender=NAME
recipient="martin.mato@ingrydacademy.com"
subject="$sender Pre-Project Script"
body="Please find the attached file."

attachment="$0"

if [ -f "$attachment" ]; then
    echo "$body" | mailx -s "$subject" -a "$attachment" "$recipient"
    echo "Email from $sender sent to $recipient with the subject $subject and the attachment $attachment 🫡"
else
    echo "Attachment file not found."
fi