import { tutor } from '../utils/index';
import { useTheme } from '../hooks/useTheme';

const Thank= ({close}:{close:()=>void}) => {
    const {theme} = useTheme()
    return (
        <div className='absolute top-0 left-0 w-full h-full flex flex-row items-center justify-center bg-[rgba(255,255,255,0.1)] backdrop-blur-sm z-20 '>
            <div className='w-1/2 h-2/3 border-4 rounded-lg p-4 text-justify' style={{backgroundColor: theme.background.primary, borderColor:theme.text.primary}}>
                <h1 className='text-center mb-4' style={{color:theme.text.primary}}>Thank You!</h1>
                <p className='text-[14px] mb-4' style={{color:theme.text.secondary}}> I would like to extend a special thank you to the programmers who helped me complete this project,
                    including the exceptionally beautiful themes, and the useful hooks from Estifanos12. Additionally,
                    I want to express my gratitude for a high-quality and detailed tutorial video provided by Code With Gionatha.
                    I have learned a lot throughout this project and sincerely appreciate it!</p>

                <div>
                    {Object.keys(tutor).map((key) =>  {
                        return (
                            <div key={key}>
                                <li style={{color:theme.text.primary}}>{tutor[key].name}</li>
                                <a className='underline ml-4 text-[14px] inline w-full' href={tutor[key].link} target="_blank" style={{color:theme.text.secondary}}>{tutor[key].link}</a>
                            </div>
                        );
                    })}
                </div>
                <div className='text-airbnb_blue italic underline w-full flex flex-row items-center justify-end p-4 text-[12px] cursor-pointer mt-10'
                onClick={close}>
                    Press 'Esc' or click here to close
                </div>
            </div>
        </div>

    );
};

export default Thank;
