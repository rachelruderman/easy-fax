export const getTargetNumber = (message) => {
    const [targetNumber] = message.msys.relay_message.rcpt_to.split('@');
    return targetNumber;
}