const BASE = import.meta.env.BASE_URL;

const audioMap: Record<string, string> = {
    'Selamat datang di Pet Forest!': `${BASE}sounds/welcome.mp3`,
    'Bagus! Lanjut ke bagian berikutnya!': `${BASE}sounds/next_part.mp3`,
    'Ayo hubungkan hewan dengan makanan kesukaannya!': `${BASE}sounds/level1_intro.mp3`,
    'Ayo kelompokkan hewan sesuai jenis makanannya!': `${BASE}sounds/level2_intro.mp3`,
    'Hore! Kamu hebat sekali! Permainan selesai!': `${BASE}sounds/game_complete.mp3`,
    'Benar!': `${BASE}sounds/correct.mp3`,
    'Ayo, coba lagi ya!': `${BASE}sounds/try_again.mp3`,
    'Bantu hewan menemukan makanannya di labirin!': `${BASE}sounds/level3_intro.mp3`,
    'Oops, jalan buntu!': `${BASE}sounds/dead_end.mp3`,
};

let currentAudio: HTMLAudioElement | null = null;

export function speak(text: string): void {
    if (typeof window !== 'undefined') {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
        
        const audioFile = audioMap[text];
        if (audioFile) {
            currentAudio = new Audio(audioFile);
            currentAudio.play().catch(e => console.error("Audio play failed", e));
        } else {
            if ('speechSynthesis' in window) {
                window.speechSynthesis.cancel();
                const utterance = new SpeechSynthesisUtterance(text);
                utterance.lang = 'id-ID';
                utterance.rate = 0.9;
                utterance.pitch = 1.2;
                window.speechSynthesis.speak(utterance);
            }
        }
    }
}

let audioCtx: AudioContext | null = null;
function getAudioContext() {
    if (!audioCtx && typeof window !== 'undefined') {
        audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return audioCtx;
}

export function playSuccessSound() {
    const ctx = getAudioContext();
    if (!ctx) return;
    
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
    osc.frequency.exponentialRampToValueAtTime(1046.50, ctx.currentTime + 0.1); // C6
    
    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.05);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
    
    osc.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.3);
}

export function playErrorSound() {
    const ctx = getAudioContext();
    if (!ctx) return;
    
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(250, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.2);
    
    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.05);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
    
    osc.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.3);
}

export function playApplauseSound() {
    if (typeof window !== 'undefined') {
        const audio = new Audio(`${BASE}sounds/applause.mp3`);
        audio.play().catch(e => console.error("Audio play failed", e));
        setTimeout(() => {
            audio.pause();
        }, 1500); // 1.5 seconds should be short enough
    }
}

export function playKeepTryingSound() {
    if (typeof window !== 'undefined') {
        const audio = new Audio(`${BASE}sounds/semangat.mp3`);
        audio.play().catch(e => console.error("Audio play failed", e));
    }
}
